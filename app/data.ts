import {ProductsGroupType, ProductType} from "@/types";

export const products: ProductType[] = [
    {
        id: 1,
        imagePath: "/margherita.png",
        name: "Margherita",
        price: 12.99,
        description: "Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic."
    },
    {
        id: 2,
        imagePath: "/chicken.png",
        name: "Chicken",
        price: 15.99,
        description: "Cheddar, mozzarella, chicken and parmesan cheeses, cheese sauce"
    },
    {
        id: 3,
        imagePath: "/healthy.png",
        name: "Healthy",
        price: 10.99,
        description: "Mozzarella, cheddar, parmesan cheese, tomatoes, olives, basil, oregano, garlic."
    },
    {
        id: 4,
        imagePath: "/margherita.png",
        name: "Margherita",
        price: 12.99,
        description: "Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic."
    },
    {
        id: 5,
        imagePath: "/chicken.png",
        name: "Chicken",
        price: 15.99,
        description: "Cheddar, mozzarella, chicken and parmesan cheeses, cheese sauce"
    },
    {
        id: 6,
        imagePath: "/healthy.png",
        name: "Healthy",
        price: 10.99,
        description: "Mozzarella, cheddar, parmesan cheese, tomatoes, olives, basil, oregano, garlic."
    },
    {
        id: 7,
        imagePath: "/margherita.png",
        name: "Margherita",
        price: 12.99,
        description: "Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic."
    },
    {
        id: 8,
        imagePath: "/chicken.png",
        name: "Chicken",
        price: 15.99,
        description: "Cheddar, mozzarella, chicken and parmesan cheeses, cheese sauce"
    },
    {
        id: 9,
        imagePath: "/healthy.png",
        name: "Healthy",
        price: 10.99,
        description: "Mozzarella, cheddar, parmesan cheese, tomatoes, olives, basil, oregano, garlic."
    },
    {
        id: 10,
        imagePath: "/margherita.png",
        name: "Margherita",
        price: 12.99,
        description: "Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic."
    },
    {
        id: 11,
        imagePath: "/chicken.png",
        name: "Chicken",
        price: 15.99,
        description: "Cheddar, mozzarella, chicken and parmesan cheeses, cheese sauce"
    },
    {
        id: 12,
        imagePath: "/healthy.png",
        name: "Healthy",
        price: 10.99,
        description: "Mozzarella, cheddar, parmesan cheese, tomatoes, olives, basil, oregano, garlic."
    },
    {
        id: 13,
        imagePath: "/margherita.png",
        name: "Margherita",
        price: 12.99,
        description: "Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic."
    },
    {
        id: 14,
        imagePath: "/chicken.png",
        name: "Chicken",
        price: 15.99,
        description: "Cheddar, mozzarella, chicken and parmesan cheeses, cheese sauce"
    },
    {
        id: 15,
        imagePath: "/healthy.png",
        name: "Healthy",
        price: 10.99,
        description: "Mozzarella, cheddar, parmesan cheese, tomatoes, olives, basil, oregano, garlic."
    }

];

export const productsGroup: ProductsGroupType[] = [
    {
        id: 1,
        title: "Pizzas",
        products: products.slice(0, 5)
    },
    {
        id: 2,
        title: "Combos",
        products: products.slice(5, 10)
    },
    {
        id: 3,
        title: "Salads",
        products: products.slice(10, 15)
    },
    {
        id: 4,
        title: "Sneaks",
        products: products.slice(4, 10)
    }
]