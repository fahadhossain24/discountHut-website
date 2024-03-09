const CouponCard = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-3/4 space-x-2">
        <div className="w-1/2 relative mx-auto rounded-lg overflow-hidden shadow-lg bg-white z-10">
          <img className="w-full" src="./coupon/coupon1.png" alt="Banner" />
          <div className="px-6 py-4 mt-12">
            <div className="font-bold text-xl mb-2">FLASH OFF 30%</div>
            <p className="text-gray-600 text-base font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae quo. Iure expedita cumque reiciendis
              quibusdam labore dolorum alias nulla?
            </p>
          </div>
          <div className="xs:hidden  lg:block">
          <div className="absolute lg:top-[40%] xl:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-3 z-20 text-orange-500">
            <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center ">
              {" "}
              <p>21 Days</p>
            </div>
            <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
              {" "}
              <p>14 Hours</p>
            </div>
            <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
              {" "}
              <p>34 Minutes</p>
            </div>
            <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
              {" "}
              <p>45 Seconds</p>
            </div>
          </div>
          </div>

          <div className="px-6 py-4 flex justify-end items-center">
            <button className="bg-[#ec4f22] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">
              Details
            </button>
          </div>
        </div>
        <div className="w-1/2 relative mx-auto rounded-lg overflow-hidden shadow-lg bg-white z-10">
          <img className="w-full" src="./coupon/coupon2.png" alt="Banner" />
          <div className="px-6 py-4 mt-12">
            <div className="font-bold text-xl mb-2">FLASH OFF 30%</div>
            <p className="text-gray-600 text-base font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, molestiae quo. Iure expedita cumque reiciendis
              quibusdam labore dolorum alias nulla?
            </p>
          </div>

          <div className="xs:hidden lg:block">
            <div className="absolute lg:top-[40%] xl:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-3 z-20 text-orange-500">
              <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
                {" "}
                <p>21 Days</p>
              </div>
              <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
                {" "}
                <p>14 Hours</p>
              </div>
              <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
                {" "}
                <p>34 Minutes</p>
              </div>
              <div className="w-24 bg-white border-2 border-orange-400 text-center rounded-lg h-24 flex items-center justify-center">
                {" "}
                <p>45 Seconds</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 flex justify-end items-center">
            <button className="bg-[#ec4f22] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
