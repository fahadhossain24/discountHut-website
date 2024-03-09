/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex lg:flex-row xs:flex-col sm:flex-col mt-4 justify-between items-start md:items-center xs:items-center align-baseline shadow-lg pb-3'>

      <div className='lg:ml-16 xs:ml-0 lg:mb-0 xs:mb-3'>
        <img src="./DiscountHut.png" alt="logo" className="w-48" />
      </div>

      <div className="flex rounded-md overflow-hidden">
        <input type="search" id="query" name="q" placeholder="Search in DiscountHut" className="w-48 sm:w-64 md:w-72 border-2 border-[#ec4f22] border-r-0 rounded-md rounded-r-none text-sm px-2" />
        <button className="bg-[#ec4f22] text-white px-3 sm:px-4 text-lg font-semibold py-2 rounded-r-md">Search</button>
      </div>

      <div className="flex justify-between gap-2 lg:mr-14 lg:mt-0 xs:mt-5 xs:mr-0 ">

        <Link
          to="/login"
          className="rounded-md bg-white text-[#ec4f22] px-4 py-2 border-2 border-[#ec4f22]"
        >
          Log In
        </Link>
        <Link
          to="/new-seller-registration"
          className="rounded-md bg-[#ec4f22] text-white px-4 py-2 border-2 border-[#ec4f22]"
        >
          Become a seller
        </Link>

      </div>
    </div>

  );
};

export default Navbar;