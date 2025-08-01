import { Product } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        <div className="p-4 border-t">
          <h2 className="text-lg font-semibold truncate" title={product.title}>
            {product.title}
          </h2>
          <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
          <div className="mt-4">
            <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full w-full block text-center">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
