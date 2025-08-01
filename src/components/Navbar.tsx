"use client";

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          E-Commerce
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/checkout" className="text-gray-600 hover:text-gray-800">
            Cart ({cartItemCount})
          </Link>
          <Link href="/orders" className="text-gray-600 hover:text-gray-800">
            Orders
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
