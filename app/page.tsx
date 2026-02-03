import {Container, Title, TopBar, Filters, Product} from "@/shared/components/shared";
import {ProductsGroup} from "@/shared/components/shared/products-group";
import {products, productsGroup} from "@/app/data";


export default function Home() {
  return (
      <>
        <Container className="mt-10">
            <Title className="font-extrabold" text="All Pizzas" size="lg" />
        </Container>

          <TopBar />

          <Container className="mt-10 flex gap-30">
              {/* Filters */}
            <div className="w-62.5">
                <Filters/>
            </div>
              {/* Pizzas */}
              <div>
                  {
                      productsGroup.map((group, index) => (
                          <ProductsGroup key={group.id} id={group.id} title={group.title} products={group.products} />
                      ))
                  }
              </div>
          </Container>
      </>

  );
}
