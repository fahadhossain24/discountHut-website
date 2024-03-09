// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white pt-12 pb-8 px-4">
        <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4">
          <div className="w-56">
            <img src="./DiscountHut.png" className="w-56 pb-5" alt="logo" />
            <p className="text-justify">
              Largest product discount advertisement,search engine, maximum
              categorized online shopping mall.
            </p>
          </div>
          <div className="w-3/4 block sm:flex text-sm mt-6 lg:mt-0">
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 font-bold text-[#ec4f22] uppercase tracking-wide">
                Let us Help You
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline "
                >
                  Your Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  Coupons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  Coupons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 font-bold text-[#ec4f22] uppercase  tracking-wide">
                Contact Us
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  House #8, Road # 14, Dhanmondi, Dhaka-1209
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  Call us : 12643
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-white no-underline"
                >
                  Email us : support@discounthut.com
                </a>
              </li>
            </ul>
            <div className="text-gray-700 flex flex-col w-full">
              <div className="inline-block py-2 px-3 font-bold text-[#ec4f22] uppercase tracking-wide">
                We accepts
              </div>
              <div className="flex flex-wrap justify-start mt-2 px-2">
                <a
                  className=" flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg bg-white"
                    src="./footerLogo/bkash.png"
                    alt=""
                  />
                </a>
                <a
                  className=" flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg"
                    src="./footerLogo/rocket.png"
                    alt=""
                  />
                </a>
                <a
                  className=" flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg bg-white"
                    src="./footerLogo/nagad.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg"
                    src="./footerLogo/upay.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg"
                    src="./footerLogo/abbank.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg  bg-white"
                    src="./footerLogo/dbbl.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg  bg-white"
                    src="./footerLogo/brac.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg bg-white"
                    src="./footerLogo/visa.png"
                    alt=""
                  />
                </a>
                <a
                  className="flex items-center justify-center w-1/8 p-1 no-underline"
                  href="#"
                >
                  <img
                    className="h-11 w-11 rounded-lg  bg-white"
                    src="./footerLogo/mastercard.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-6 text-gray-500 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center">
          <div>Copyright © 2024 Discounthut.com. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
