import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const btns = [
  "Sofa",
  "Table",
  "Dressers",
  "Chair",
  "Bed",
  "Lamps",
  "Speakers",
  "Lamps",
];

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
const Home = () => {
  return (
    <div className="w-full p-5">
      {/* categories */}
      <div className="w-full xl:h-24 lg:h-16 flex items-center px-5 gap-10 xl:text-base lg:text-xs">
        <h1 className="text-xl">Categories</h1>
        <div className="w-full h-full flex items-center justify-between gap-5">
          {btns.map((btn, i) => {
            return (
              <button
                key={i}
                className="h-full w-full text-xl rounded-full bg-[#EFEFEF] border border-white flex items-center justify-center"
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
      {/* categories content */}
      <div className="w-full h-screen flex p-5 gap-2">
        <div
          className="w-[800px] h-full border border-white rounded-[60px] flex flex-col justify-between px-3 py-3 bg-center"
          style={{
            backgroundImage: `url(${"https://th.bing.com/th/id/R.f31be3d51071badd8f7f7281358d839d?rik=hskbpfrpipe3ZQ&riu=http%3a%2f%2fwww.architectureartdesigns.com%2fwp-content%2fuploads%2f2019%2f05%2fwhite-sofa-7.jpg&ehk=hefOqyndjJ5EnssetbNZL6lW5LWdDZ73FtHRuW5LPZ4%3d&risl=&pid=ImgRaw&r=0"})`,
          }}
        >
          <h1 className="text-5xl font-medium pl-10 pt-5">New Deals</h1>
          {/* middle part */}
          <div
            className="flex flex-col justify-between w-[400px] h-[500px] mx-auto rounded-[60px] bg-center glassEffect"
            style={{
              backgroundImage: `url(${"https://i.postimg.cc/k59BVp74/512daf0bec0b5b394a06d8a030807afd-removebg-preview.png"})`,
            }}
          >
            <div className="w-full h-full p-2 flex justify-between">
              <div className="pl-7 pt-4 flex flex-col gap-3">
                <h1 className="text-6xl font-medium">$508</h1>
                <h1 className="text-2xl font-medium">Long Chair</h1>
              </div>
              <button className="h-24 w-32 rounded-full bg-white flex items-center justify-center gap-1">
                <FaStar size={20} className="text-yellow-500" />
                <h1 className="text-xl font-medium">4.6</h1>
              </button>
            </div>
            <div className="w-full flex justify-end p-2 gap-1">
              <button className="size-24 rounded-full bg-white flex items-center justify-center">
                <FaHeart size={28} color="red" />
              </button>
              <button className="size-24 rounded-full bg-slate-500 flex items-center justify-center">
                <CiShoppingCart size={28} color="white" />
              </button>
            </div>
          </div>

          <div className="w-full rounded-full bg-slate-100 h-24 px-2 flex items-center justify-between">
            <button className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
              <IoIosArrowRoundBack size={28} />
            </button>
            <h1 className="text-lg font-medium">Slide left and right</h1>
            <button className="h-20 w-20 rounded-full bg-black flex items-center justify-center">
              <IoIosArrowRoundForward size={28} color="white" />
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full h-full flex gap-1">
            <div
              className="w-[800px] h-full flex flex-col justify-between rounded-[60px] border border-white bg-[#E7E7E7] p-2 bg-right-bottom bg-no-repeat"
              style={{
                backgroundImage: `url(${"https://i.postimg.cc/Fz5Ffhdw/image-removebg-preview.png"})`,
              }}
            >
              <div className="w-full flex flex-col gap-5 pl-8 pt-6">
                <h1 className="text-6xl font-medium">
                  Great Value <br /> Deals
                </h1>
                <h1 className="text-2xl font-medium">
                  Find Items On Sale <br /> With 50-70%
                </h1>
              </div>
              <button className="w-52 h-28 text-xl font-medium rounded-full bg-white flex items-center justify-center gap-3">
                <MdDiscount color="#C7705D" size={24} /> 75% off
              </button>
            </div>
            <div className="w-[400px] h-full bg-[#E7E7E7] flex flex-col justify-between border border-white rounded-[60px] p-2">
              <h1 className="pl-5 text-3xl font-medium pt-5">
                Customize your <br /> products
              </h1>
              <div className="h-28 w-full text-xl font-medium rounded-full bg-white flex items-center justify-between p-3">
                <h1 className="text-xl font-medium pl-10">Get Started</h1>
                <button className="h-full bg-black w-32 rounded-full flex items-center justify-center">
                  <GoArrowUpRight color="white" size={28} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex items-center justify-between py-3">
              <h1 className="text-6xl font-medium pl-7">Popular Items</h1>
              <button className="w-[200px] h-24 flex items-center justify-center gap-5 text-xl rounded-full bg-[#EFEFEF] border border-white">
                View all <IoIosArrowRoundForward size={28} />
              </button>
            </div>
            {/* popular items */}
            <div className="w-full h-full flex items-center justify-between gap-3">
                  <div id="bg-size" className={`w-full h-full flex flex-col justify-between rounded-[50px] bg-[#C7705D] bg-no-repeat bg-center text-white`} style={{backgroundImage:`url('https://i.postimg.cc/1tSkxs3H/image-1-removebg-preview.png')`}}>
                    <div className="w-full flex items-center justify-between px-3 pt-3">
                      <h1 className="text-xl font-medium pl-5">White Chair</h1>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full w-20 h-16 bg-white bg-opacity-30 flex items-center justify-center gap-1"><FaStar className="text-yellow-400"/> 4.6</div>
                        <button className="size-16 rounded-full bg-white flex items-center justify-center">
                          <FaHeart color="red"/>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-end px-2 pb-2">
                      <div className="w-44 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-end px-2">
                      <h1 className="pr-3 font-medium">Buy $209</h1>
                      <button className="size-16 rounded-full bg-white flex items-center justify-center">
                        <CiShoppingCart color="black" size={24}/>
                      </button>
                      </div>
                    </div>
                  </div>
                  <div id="bg-size" className={`w-full h-full flex flex-col justify-between rounded-[50px] bg-[#272727] bg-no-repeat bg-center text-white`} style={{backgroundImage:`url('https://i.postimg.cc/X7fS8scF/ca6bab9e-23da-4026-b245-15659f083bb6-removebg-preview.png')`}}>
                    <div className="w-full flex items-center justify-between px-3 pt-3">
                      <h1 className="text-xl font-medium pl-5">Ottoman</h1>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full w-20 h-16 bg-white bg-opacity-30 flex items-center justify-center gap-1"><FaStar className="text-yellow-400"/>4.6</div>
                        <button className="size-16 rounded-full bg-white flex items-center justify-center">
                          <FaHeart color="red"/>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-end px-2 pb-2">
                      <div className="w-44 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-end px-2">
                      <h1 className="pr-3 font-medium">Buy $209</h1>
                      <button className="size-16 rounded-full bg-white flex items-center justify-center">
                        <CiShoppingCart color="black" size={24}/>
                      </button>
                      </div>
                    </div>
                  </div>
                  <div id="bg-size" className={`w-full h-full flex flex-col justify-between rounded-[50px] bg-[#C0C4CF]  bg-no-repeat bg-center text-white`} style={{backgroundImage:`url('https://i.postimg.cc/1tSkxs3H/image-1-removebg-preview.png')`}}>
                    <div className="w-full flex items-center justify-between px-3 pt-3">
                      <h1 className="text-xl font-medium pl-5">White Chair</h1>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full w-20 h-16 bg-white bg-opacity-30 flex items-center justify-center gap-1"><FaStar className="text-yellow-400"/>4.6</div>
                        <button className="size-16 rounded-full bg-white flex items-center justify-center">
                          <FaHeart color="red"/>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-end px-2 pb-2">
                      <div className="w-44 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-end px-2">
                      <h1 className="pr-3 font-medium">Buy $209</h1>
                      <button className="size-16 rounded-full bg-white flex items-center justify-center">
                        <CiShoppingCart color="black" size={24}/>
                      </button>
                      </div>
                    </div>
                  </div>
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
