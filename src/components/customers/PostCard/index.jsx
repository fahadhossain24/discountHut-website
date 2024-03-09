import { CiLocationOn } from "react-icons/ci";
import { IoStopwatchOutline } from "react-icons/io5";
const PostCard = () => {
  return (
    <div className=" w-64 mx-auto border-2 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full" src="./product/xiaomi.png" alt="Banner" />
        <div className="absolute w-30 top-0 left-0 mt-3 ml-2 p-1 bg-[#ec4f11] rounded-lg">
          <div className="flex items-center text-sm">
            {" "}
            <IoStopwatchOutline size="20px" color="#fff" className="inline" />
            <p className="text-white inline">5 days left</p>
          </div>
        </div>
        <div className="absolute w-30 bottom-0 right-0 mb-2 mr-2 p-2 bg-[#ec4f11] rounded-full">
          <span className="text-white text-xl"> -30% </span>
        </div>
      </div>

      <div className="px-6 py-1">
        <div className="font-bold text-2xl text-[#ec4f22] mb-2">Xiaomi</div>
        <p className="text-black text-base mb-1"> Xiaomi Smart Watch 42mm </p>
        <span className="font-bold text-3xl text-[#ec4f22]">Tk 2000</span>
        <span className="text-gray-400 text-xl line-through ml-2">
          {" "}
          Tk 2500
        </span>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <p className="inline opacity-65">Fashion</p>
        <div className="flex items-center">
          <CiLocationOn className="inline mr-2" />
          <a href="#" className="inline opacity-65">
            Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
