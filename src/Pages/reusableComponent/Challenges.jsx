import React, { useState, useEffect } from "react";

//icons
import { FaAngleRight } from "react-icons/fa6";

// import School_Image1 from "../../assets/Challenge_Page/DigiiSchool1.png";
// import School_Image1 from "../../assets/Challenge_Page/DigiiSchool1.png";



const Challenges = ({ index,data }) => {
  const [activeCategory, setActiveCategory] = useState(
    data?.tabs?.[0]?.category
  );
  const [filterData, setFilterData] = useState({});
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const findData = data?.tabs?.find((i) => i?.category == activeCategory);
    setFilterData(findData);
  }, [activeCategory]);

  return (
    <div
      onMouseEnter={() => setGlow(true)}
      onMouseLeave={() => setGlow(false)}
      className="w-full h-full relative md:h-[40rem] grid md:grid-cols-[5rem_1fr] grid-cols-1 grid-rows-[1rem_1fr]
       sm:grid-rows-[5rem_1fr]  md:grid-rows-1 gap-1 md:gap-4"
    >
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-0 md:w-10 md:h-10 bg-[#d6e5f9] rounded-full flex justify-center items-center">
          {(glow || index == 0) && (
            <div className="w-6 h-6 bg-sky-500 rounded-full" />
          )}
        </div>
        <div
          className={`w-0 md:w-[1px] h-0 md:h-full ${
            glow || index == 0 ? "bg-sky-500" : "bg-[#d6e5f9]"
          }`}
        />
      </div>

      <div className="w-full h-full relative bg-white border border-gray-100 drop-shadow-2xl  grid grid-rows-[5rem_1fr_12rem] md:grid-rows-[5rem_1fr_6rem] rounded-2xl overflow-hidden gap-4 p-5 md:p-10">
        <div className="w-full h-full font-semibold text-md sm:text-xl flex flex-col items-center md:justify-center gap-1">
          <h1 className="text-sky-500 ">{data?.heading1}</h1>
          <h1>{data?.heading2}</h1>
        </div>
        <div className="w-full h-full grid-cols-1 md:grid-rows-1 grid-rows-1 grid gap-7 md:grid-cols-2">
          <div className="w-full h-full flex flex-col justify-center items-start gap-2 sm:gap-7">
            <h1 className="text-2xl sm:text-4xl font-bold font-Poppins sm:leading-12 sm:pr-10">
              {filterData?.title}
            </h1>
            <p className="text-sm sm:text-md text-gray-600 md:w-[75%]">
              {filterData?.description}
            </p>
            <button className="flex items-center gap-2 text-sm bg-[#2f3437] hover:bg-sky-500 text-white px-4 py-2 rounded cursor-pointer">
              <FaAngleRight />
              View Details
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-center ">
            <img
              src={filterData?.image}
              alt="image"
              className=" object-contain"
            />
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col sm:flex-row justify-center items-center gap-5  ">
          {data?.tabs.map((item, index) => (
            <button
              onClick={() => setActiveCategory(item?.category)}
              key={index}
              className={`px-4 py-2 rounded-md font-medium  ${
                item?.category == activeCategory
                  ? "bg-sky-500 text-white"
                  : "bg-[#f5f8fe] text-gray-600"
              }`}
            >
              {item?.category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
