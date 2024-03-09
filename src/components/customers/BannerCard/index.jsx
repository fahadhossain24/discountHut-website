/* eslint-disable react/prop-types */
import { CiStopwatch } from "react-icons/ci";
const Card = ({ image }) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={`./banner/${image}`} alt="Banner" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Special Discount</div>
        <p className="text-gray-700 text-base">
          Get 20% off on all products! Limited time offer. Hurry up and grab
          your favorites now.
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <CiStopwatch className="inline mr-2" />
          <p className="inline opacity-65">5 days left</p>
        </div>
        <button className="bg-[#ec4f22] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
