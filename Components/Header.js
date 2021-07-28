import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex space-x-4 p-4 items-center">
      <div className="cursor-pointer lg:text-lg">
        <Link href="/">
          <span>Tony Ibrahim</span>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <span className="cursor-pointer lg:text-lg text-gray-500 transition all duration-250 ease-in-out hover:text-gray-700 ">
            Contact
          </span>
        </Link>
      </div>
      <div className="cursor-pointer lg:text-lg  text-gray-500 hover:text-gray-700">
        <Link href="about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
