import Link from "next/link";
import { FiPhoneCall, FiUser } from "react-icons/fi";

const NavBarTop = () => {
  return (
    <>
      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              We are available 24/7, need help?
              <a className="font-bold text-primary ml-1">+8801723456543</a>
            </span>

            <div className="lg:text-right flex items-center navBar">
              <div>
                <Link href="/" className="font-medium hover:text-primary">
                  About Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <div>
                <Link href="/" className="font-medium hover:text-primary">
                  Contact Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <Link href="/profile" className="font-medium hover:text-primary">
                My Account
              </Link>
              <span className="mx-2">|</span>

              <Link
                href="/login"
                className="flex items-center font-medium hover:text-primary"
              >
                <span className="mr-1">
                  <FiUser />
                </span>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;
