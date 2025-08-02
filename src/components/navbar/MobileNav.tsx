import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FiHome, FiUser, FiShoppingCart, FiAlignLeft } from "react-icons/fi";

const MobileNav = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        {/* <CategoryDrawer className="w-6 h-6 drop-shadow-xl" /> */}
      </div>
      <footer className="lg:hidden fixed z-30 bottom-0 bg-primary flex items-center justify-between w-full h-16 px-3 sm:px-10">
        <button
          aria-label="Bar"
          //   onClick={toggleCategoryDrawer}
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-white">
            <FiAlignLeft className="w-6 h-6 drop-shadow-xl" />
          </span>
        </button>
        <Link
          href="/"
          className="text-xl text-white"
          rel="noreferrer"
          aria-label="Home"
        >
          <FiHome className="w-6 h-6 drop-shadow-xl" />
        </Link>

        <button className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg">
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            {cartItemCount}
          </span>
          <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
        </button>
        <button
          aria-label="User"
          type="button"
          className="text-xl text-white indicator justify-center"
        >
          <Link href="">
            <FiUser className="w-6 h-6 drop-shadow-xl" />
          </Link>
        </button>
      </footer>
    </>
  );
};

export default MobileNav;
