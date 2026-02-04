import { prisma } from './prisma-client';
import * as bcrypt from 'bcryptjs';
import { categories, ingredients, productItems, products } from './constants';

const CLOUD_NAME = 'df54bqvpl';

export const getTransparentUrl = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/e_make_transparent:10/f_png/${encodedUrl}`;
};

async function seed() {
    const password = await bcrypt.hash('12345', 10);

    // 1. Очистка БД (в обратном порядке связей)
    await prisma.orderItemIngredient.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.cartItem.deleteMany();
    await prisma.cart.deleteMany();
    await prisma.productItem.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    // 2. Создание пользователей
    await prisma.user.createMany({
        data: [
            { fullName: "Kristoph Pizza", email: "kristoph@example.com", password, verified: new Date(), role: "ADMIN" },
            { fullName: "Ivan Ivanov", email: "ivan@example.com", password, verified: new Date(), role: "USER" },
        ],
    });

    // 3. Создание категорий
    await prisma.category.createMany({ data: categories });

    // 4. Создание ингредиентов
    await prisma.ingredient.createMany(
        {
            data: ingredients.map((ing) => ({ ...ing, imageUrl: getTransparentUrl(ing.imageUrl) }))
        }
    );

    // Получаем созданные ингредиенты для работы со связями
    const dbIngredients = await prisma.ingredient.findMany();

    // 5. Создание продуктов и их вариаций (ProductItems)
    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        const productVirtualId = i + 1;
        const imageUrl = getTransparentUrl(item.imageUrl);

        const product = await prisma.product.create({
            data: {
                name: item.name,
                imageUrl: imageUrl,
                categoryId: item.categoryId,
                // Привязываем первые 5 ингредиентов для примера
                ingredients: {
                    connect: dbIngredients.slice(0, 5).map((ing) => ({ id: ing.id })),
                },
            },
        });

        // Ищем вариации (цены/размеры) для этого продукта
        const itemsForThisProduct = productItems.filter((p) => p.productId === productVirtualId);

        if (itemsForThisProduct.length > 0) {
            await prisma.productItem.createMany({
                data: itemsForThisProduct.map((pItem) => ({
                    price: pItem.price,
                    size: pItem.size as any,
                    type: pItem.type as any,
                    productId: product.id, // Реальный ID из БД
                })),
            });
        }
    }

    // 6. Создание корзины для первого пользователя
    const cart = await prisma.cart.create({
        data: {
            userId: 1,
            token: '11111',
        },
    });

    // Получаем все созданные вариации продуктов, чтобы добавить их в корзину
    const dbProductItems = await prisma.productItem.findMany();

    // Создаем первый айтем в корзине с ингредиентами
    await prisma.cartItem.create({
        data: {
            cartId: cart.id,
            productItemId: dbProductItems[0].id, // Например, Маргарита
            quantity: 2,
            ingredients: {
                // Коннектим ингредиенты по ID
                connect: [
                    { id: dbIngredients[0].id },
                    { id: dbIngredients[1].id }
                ],
            },
        },
    });

    // Создаем второй айтем без ингредиентов (или с другими)
    await prisma.cartItem.create({
        data: {
            cartId: cart.id,
            productItemId: dbProductItems[5].id,
            quantity: 1,
            ingredients: {
                connect: [{ id: dbIngredients[3].id }],
            },
        },
    });
}

async function main() {
    try {
        await seed();
        console.log('✅ Seeding completed successfully!');
    } catch (e) {
        console.error('❌ Seeding error:', e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();