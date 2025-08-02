import { Product } from "@/types/types";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/carusel/Carousel";
import OfferCard from "@/components/OfferCard";
import Banner from "@/components/Banner";
import StickyCart from "@/components/StickyCart";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <div className="min-h-screen">
        <StickyCart />
        <div className="bg-white">
          <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
            <div className="flex w-full">
              <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                <Carousel />
              </div>
              <div className="w-full hidden lg:flex">
                <OfferCard />
              </div>
            </div>
            <div className="bg-pink-100 px-4 sm:px-10 py-6 mt-6">
              <Banner />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-8 text-charcoal-blue">
                Our Latest Products
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
