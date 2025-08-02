import Image from "next/image";
import React from "react";

const OfferCard = () => {
  return (
    <div className="w-full group">
      <div className="bg-gray-50 h-full border-2 border-secondary transition duration-150 ease-linear transform group-hover:border-primary shadow">
        <div className="bg-pink-100 text-gray-900 px-6 py-2 border-b border-gray-300 flex items-center justify-center">
          <h3 className="text-base font-serif font-medium ">
            Latest Super Discount Active Coupon Code
          </h3>
        </div>
        <div className="overflow-hidden">
          <Image
            src="/public/offer.jpg"
            width="200"
            height="200"
            alt="offer image"
          />

          <Image
            src="/public/offer2.jpg"
            width="200"
            height="200"
            alt="offer image"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
