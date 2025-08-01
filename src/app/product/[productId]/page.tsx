import { Product } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';
import { Metadata } from 'next';
import AddToCartButton from './AddToCartButton';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  const response = await axios.get('https://fakestoreapi.com/products');
  const products: Product[] = response.data;
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

// Fetch data for a single product
async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.productId);
  if (!product) {
    return {
      title: 'Product not found',
      description: 'The requested product could not be found.',
    };
  }
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
      <div className="relative w-full h-96">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="p-4 border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-500">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </span>
          <span>({product.rating.count} reviews)</span>
        </div>
        <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
        <p className="text-gray-700">{product.description}</p>
        <div className="mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
