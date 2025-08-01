import { Order } from '@/types/types';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Order ID</th>
            <th className="py-3 px-4 text-left">Customer</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Total Items</th>
            <th className="py-3 px-4 text-left">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4 font-mono text-sm truncate" title={order.id}>{order.id.substring(0, 10)}...</td>
              <td className="py-3 px-4">{order.customer.fullName}</td>
              <td className="py-3 px-4">{order.orderDate}</td>
              <td className="py-3 px-4">{order.totalItems}</td>
              <td className="py-3 px-4">${order.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
