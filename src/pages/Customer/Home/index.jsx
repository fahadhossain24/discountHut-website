// eslint-disable-next-line no-unused-vars
import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LuBox } from "react-icons/lu";
import Navbar from "../../../components/customers/Navbar";
import BannerCard from "../../../components/customers/BannerCard";
import ShopCard from "../../../components/customers/ShopCard";
import PostCard from "../../../components/customers/PostCard";
import CouponCard from "../../../components/customers/CouponCard";
import AppDownload from "../../../components/customers/AppDownload";
import Footer from "../../../components/customers/Footer";
const Home = () => {
  const categories = [
    "Food",
    "Clothes",
    "Electronics",
    "Ornaments",
    "Books",
    "Toys",
    "Furniture",
    "Sports Equipment",
    "Beauty Products",
    "Stationery",
    "Home Appliances",
    "Jewelry",
    "Art Supplies",
    "Pet Supplies",
    "Tools",
  ];

  return (
    <>
      <Navbar />
      {/* category */}
      <div className="flex flex-col lg:flex-row p-8 gap-x-1 mx-16">
        <div className="lg:w-1/4 xs:w-full md:w-1/2 border-2 border-slate-300 rounded-md mb-4 lg:mb-0">
          <div className="px-4 py-2">
            <p className="flex items-center">
              <TfiMenuAlt size="25px" className="inline" />
              <span className="ml-2">Category</span>
              <br />
            </p>
            <hr className="my-2" />
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="py-1">
                  <AiOutlinePlus size="20px" className="inline" />{" "}
                  <a href={`#${category.toLowerCase()}`}>{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-3/4 xs:w-full md:w-1/3 border-2 rounded-lg">
          <a href="your-link-here" className="block">
            <img src="./girl.PNG" className="w-full rounded-md" alt="Front Pic" />
          </a>
        </div>
      </div>

      {/* subsection-0ne */}

      {/* <div className="flex mt-4 justify-center mb-4 rounded-md">
        <div className="border-2 border-slate-300 px-8 py-8 flex items-center rounded-l-md border-l-2">
          <AiOutlineSafety size="60px" color="orange" className="inline" />
          <div className="ml-4 rounded-md">
            <p className="text-2xl">Safe & Reliable</p>
            <p className="font-thin">
              Safe and secured post all over the country
            </p>
          </div>
        </div>
        <div className="border-2 border-slate-300 px-8 py-8 flex items-center">
          <HiOutlineArchiveBox size="60px" color="orange" className="inline" />
          <div className="ml-4">
            <p className="text-2xl">100% Authentic Products</p>
            <p className="font-thin">Original 100% genuine products</p>
          </div>
        </div>
        <div className="border-2 border-slate-300 px-8 py-8 flex items-center rounded-r-md border-r-2">
          <LuBox size="60px" color="orange" className="inline" />
          <div className="ml-4">
            <p className="text-2xl">Safe & Reliable</p>
            <p className="font-thin">
              Safe and secured post all over the country
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex lg:flex-row xs:flex-col sm:flex-col  mt-4 justify-center mb-4 rounded-md">
        <div className="border-2 border-slate-300 px-8 py-8 flex items-center rounded-l-md border-l-2 xs:w-full sm:w-auto md:w-auto">
          <AiOutlineSafety size="60px" color="orange" className="inline" />
          <div className="ml-4">
            <p className="text-lg xs:text-xl md:text-2xl">Safe & Reliable</p>
            <p className="font-thin text-sm xs:text-base md:text-lg">
              Safe and secured post all over the country
            </p>
          </div>
        </div>
        <div className="border-2 border-slate-300 px-8 py-8 flex items-center xs:mt-4 sm:mt-0 md:mt-0 xs:w-full sm:w-auto md:w-auto">
          <HiOutlineArchiveBox size="60px" color="orange" className="inline" />
          <div className="ml-4">
            <p className="text-lg xs:text-xl md:text-2xl">100% Authentic Products</p>
            <p className="font-thin text-sm xs:text-base md:text-lg">
              Original 100% genuine products
            </p>
          </div>
        </div>
        <div className="border-2 border-slate-300 px-8 py-8 flex items-center rounded-l-md border-l-2 xs:w-full sm:w-auto md:w-auto">
          <AiOutlineSafety size="60px" color="orange" className="inline" />
          <div className="ml-4">
            <p className="text-lg xs:text-xl md:text-2xl">Safe & Reliable</p>
            <p className="font-thin text-sm xs:text-base md:text-lg">
              Safe and secured post all over the country
            </p>
          </div>
        </div>
      </div>

      {/* subsection-two */}
      <div className="flex flex-col mt-8">
        <div className="ml-4 sm:ml-20 mb-8">
          <h2 className="text-3xl font-bold">Featured Categories</h2>
        </div>
        <div className="flex flex-wrap justify-center mb-4 gap-4">
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/tshirt.png" className="w-16" />
            <span className="text-center font-bold">Fashion</span>
            <br />
            <span className="text-orange-400 text-center ">25 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/computer.png" className="w-16" />
            <span className="text-center font-bold">Electronics</span>
            <br />
            <span className="text-orange-400 text-center">26 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/appliance.png" className="w-16" />
            <span className="text-center font-bold">Home Appliance</span>
            <br />
            <span className="text-orange-400 text-center">26 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/grocery.png" className="w-16" />
            <span className="text-center font-bold">Groceries</span>
            <br />
            <span className="text-orange-400 text-center">26 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/tshirt.png" className="w-16" />
            <span className="text-center font-bold">Fashion</span>
            <br />
            <span className="text-orange-400 text-center">36 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/computer.png" className="w-16" />
            <span className="text-center font-bold">Computer</span>
            <br />
            <span className="text-orange-400 text-center">14 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/appliance.png" className="w-16" />
            <span className="text-center font-bold">Appliance</span>
            <br />
            <span className="text-orange-400 text-center">13 items</span>
          </div>
          <div className="w-44 h-44 border-2 flex items-center justify-center flex-col">
            <img src="./homeCard/grocery.png" className="w-16" />
            <span className="text-center font-bold">Groceries</span>
            <br />
            <span className="text-orange-400 text-center">22 items</span>
          </div>
        </div>
      </div>

      {/* Latest Deals */}

      <div className="flex-col mt-3">
        <div className="ml-20 mb-8">
          <h2 className="text-3xl font-bold">Latest Deals</h2>{" "}
        </div>
        <div className="ml-4 mr-7">
          <div className="ml-4 flex justify-between flex-wrap gap-y-3">
            <BannerCard image={"banner1.png"} />
            <BannerCard image={"banner2.png"} />
            <BannerCard image={"banner3.png"} />
            <BannerCard image={"banner4.png"} />
            <BannerCard image={"banner5.png"} />
            <BannerCard image={"banner3.png"} />
            <BannerCard image={"banner6.png"} />
            <BannerCard image={"banner2.png"} />
          </div>
        </div>
      </div>

      {/* popular shops */}

      <div className="flex-col mt-8">
        <div className="ml-20 mb-8">
          <h2 className="text-3xl font-bold">Popular shops</h2>{" "}
        </div>
        <div className="ml-4 mr-7">
          <div className="justify-center flex flex-wrap gap-x-4 gap-y-3">
            <ShopCard image={"gozaayan.png"} />
            <ShopCard image={"Nagad.png"} />
            <ShopCard image={"gozaayan.png"} />
            <ShopCard image={"PizzaHut.png"} />
            <ShopCard image={"Nagad.png"} />
            <ShopCard image={"Taagaman.png"} />
            {/* <ShopCard image={"Nagad.png"} />
                        <ShopCard image={"PizzaHut.png"} /> */}
          </div>
        </div>
      </div>
      {/* Popular Products */}

      <div className="flex-col mt-8">
        <div className="ml-20 mb-8">
          <h2 className="text-3xl font-bold">Popular Products</h2>{" "}
        </div>
        <div className="ml-10 mr-16">
          <div className="ml-4 flex justify-between flex-wrap gap-y-3">
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
            <PostCard image={"xiaomi.png"} />
          </div>
        </div>
      </div>

      {/* Upcoming Coupons */}

      <div className="flex-col mt-8">
        <div className="ml-20 mb-8">
          <h2 className="text-3xl font-bold">Upcoming Coupons</h2>{" "}
        </div>
        <CouponCard />
      </div>

      {/* App download card */}
      <div className="w-full mx-auto h-96 mb-56 lg:mt-8 xs:mt-[56%] ">
        <div className="h-full justify-center flex lg:gap-2 xs:gap-y-12 lg:flex-row xs:flex-col items-center">
          <div className="lg:w-[60%] xs:w-[90%] lg:ml-16 xs:ml-0 "><AppDownload /></div>
          <div className="lg:w-[40%] xs:w-[90%] xs:mx-auto lg:mx-0 xs:mb-[50%] lg:mb-0 lg:mr-10 mt-[320px] h-full ">
            <img src="./Advertise.jpg" className="w-full h-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
