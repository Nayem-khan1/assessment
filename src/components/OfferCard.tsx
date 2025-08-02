import Image from "next/image";
import Link from "next/link";

interface OfferCardProps {
  title: string;
  discount: string;
  imageUrl: string;
  href: string;
}

const OfferCard = ({ title, discount, imageUrl, href }: OfferCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg mt-2 bg-red-500 px-3 py-1 rounded-full">
            {discount}
          </p>
          <span className="mt-4 text-sm font-semibold underline group-hover:no-underline">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;
