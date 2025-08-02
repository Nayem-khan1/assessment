"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { Product } from '@/types';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000); // Hide notification after 2 seconds
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-dark-slate text-white font-semibold px-6 py-3 rounded-lg hover:bg-charcoal-blue transition-colors duration-300 w-full"
      >
        Add to Cart
      </button>
      {added && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 border border-green-300 rounded-lg text-center">
          Added to cart successfully!
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
