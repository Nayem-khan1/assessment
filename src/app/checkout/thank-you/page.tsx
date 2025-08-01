import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-8">Your order has been placed successfully.</p>
      <Link href="/" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYouPage;
