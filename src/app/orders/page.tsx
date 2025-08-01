"use client";

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import OrderTable from '@/components/OrderTable';

const OrdersPage = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        <OrderTable orders={orders} />
      )}
    </div>
  );
};

export default OrdersPage;
