import { AiOutlineApple } from "react-icons/ai";
import { PiGooglePlayLogoLight } from "react-icons/pi";

const AppDownload = () => {
  return (
    <div className="relative flex rounded-lg border-2  bg-[#ec4f22] w-full h-96 z-2 lg:top-40 xs:top-[90%] ">
      <img
        src="./samsung.png"
        className="absolute lg:left-28 xs:left-12 bottom-12 w-56 h-120 rounded-l-lg z-12"
        alt="mobile_image"
      />
      <div className="w-full absolute top-24">
        {/* <p className="font-bold text-white xs:text-2xl absolute xs:right-20 lg:right-72 lg:text-5xl text-center"> */}
        <p className="font-bold text-white xs:text-2xl absolute xs:right-20 lg:right-28 lg:text-5xl text-center">
          Download Our <span className="xs:block lg:inline w-full">Mobile App</span>
        </p>
        <div className=" flex absolute xs:right-0 top-20 justify-center lg:flex-row xs:flex-col gap-2 lg:w-full xs:w-[50%]">
          <button className="bg-black xs:w-[150px] xs:ml-16 lg:ml-44  rounded-xl text-white flex items-center px-4 py-2">
            <PiGooglePlayLogoLight size="25px" className="mr-2" />
            Play Store
          </button>
          <button className="bg-black  w-[150px] xs:ml-16 lg:ml-0 rounded-xl text-white flex items-center px-4 py-2">
            <AiOutlineApple size="25px" className="mr-2" />
            App Store
          </button>
        </div>
      </div>
    </div>

    // <div className="rounded-lg border-2 bg-[#ec4f22] w-7/12 h-96 mx-auto mt-40">
    //     <div className="grid grid-cols-2 h-full">
    //         <div className="flex items-center justify-center">
    //             <img src="./samsung.png" className="w-56 h-120 rounded-l-lg" alt="mobile_image" />
    //         </div>
    //         <div className="flex flex-col justify-center">
    //             <p className="font-bold text-white text-5xl text-center">Download Our Mobile App on Google Play Store</p>
    //             <div className="flex justify-center mt-8">
    //                 <button className="bg-black rounded-xl text-white flex items-center px-4 py-2 mr-4">
    //                     <PiGooglePlayLogoLight size="25px" className="mr-2" />Play Store
    //                 </button>
    //                 <button className="bg-black rounded-xl text-white flex items-center px-4 py-2">
    //                     <AiOutlineApple size="25px" className="mr-2" />App Store
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default AppDownload;
