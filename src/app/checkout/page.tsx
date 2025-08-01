"use client";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '@/store/cartSlice';
import Image from 'next/image';
import CheckoutForm from '@/components/CheckoutForm';

const CheckoutPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt={item.title} width={80} height={80} className="object-contain" />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-3 py-1">-</button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-3 py-1">+</button>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 hover:text-red-700">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="p-6 border rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="mt-6">
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
