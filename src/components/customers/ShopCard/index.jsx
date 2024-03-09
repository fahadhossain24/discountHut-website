/* eslint-disable react/prop-types */
import { IoMdHeartEmpty } from "react-icons/io";

const ShopCard = ({ image }) => {
  return (
    <div className="relative w-64 overflow-hidden shadow-lg">
      <img className="w-full border-b-2" src={`./shop/${image}`} alt="Image" />
      <div className="absolute top-0 right-0 mt-2 mr-2">
        {/* Insert your favorite/wishlist icon here */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18l-1.42-1.34C4.4 13.25 2 10.42 2 7.5 2 5.5 3.5 4 5.5 4c1.54 0 3.04.99 4.5 2.5C11.46 4.99 12.96 4 14.5 4 16.5 4 18 5.5 18 7.5c0 2.92-2.4 5.75-6.58 9.16L10 18z" clipRule="evenodd" />
                </svg> */}
        <IoMdHeartEmpty size="30px" color="#ec4f22" />
      </div>
      <div className="text-center px-6 py-4">
        <p className="font-bold text-xl mb-2">Shop</p>
        <p className="text-orange-500 text-base">25 items</p>
      </div>
    </div>
  );
};

export default ShopCard;
