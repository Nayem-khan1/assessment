import AddToCartButton from "@/app/product/[productId]/AddToCartButton";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-light-blue-grey rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="p-4"
          />
        </div>
      </Link>
      <div className="p-4 border-t border-light-blue-grey">
        <h2
          className="text-lg font-semibold truncate text-dark-slate"
          title={product.title}
        >
          {product.title}
        </h2>
        <p className="text-charcoal-blue mt-2">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link href={`/product/${product.id}`}>
            <span className="bg-dark-slate text-white text-sm font-semibold px-3 py-2 rounded-lg w-full block text-center hover:bg-charcoal-blue transition-colors duration-300">
              Details
            </span>
          </Link>
          <AddToCartButton product={product} type="Home" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
