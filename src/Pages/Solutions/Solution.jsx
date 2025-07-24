import React from "react";
import LeftImageLogo from "../../assets/left-square.png";
import RightImageLogo from "../../assets/right-square.png";

import { FaAngleRight } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import BookADemo from "../Book_a_demo/BookADemo";

// explore icons
import { SlWallet } from "react-icons/sl";
import { TbHeartRateMonitor } from "react-icons/tb";
import { PiMoneyWavy } from "react-icons/pi";
import { MdOutlineInventory } from "react-icons/md";
import { NavLink } from "react-router-dom";

const column1 = [
  "Comprehensive personal information",
  "Parents/guardians information",
  "Medical information",
  "Academic and progress reports",
  "Parent-teacher meeting notes",
  "Documents and photo ID card",
];

const column2 = [
  "Behavior and disciplinary records",
  "Customizable fields and tags",
  "Advanced student search functionality",
  "Active and inactive students tracking",
  "Data import and export",
];


const featuresWithIcons = [
  {
    title: "Fee Management & Wallet",
    icon: <SlWallet/>
  },
  {
    title: "Payment Gateway & eNACH",
    icon: <TbHeartRateMonitor/>
  },
  {
    title: "Faculty Management & Payroll",
    icon: <PiMoneyWavy/>
  },
  {
    title: "Inventory & Expense Management",
    icon: <MdOutlineInventory/>
  },
  {
    title: "Online Store for Students",
    icon: <SlWallet/>
  },
  {
    title: "Multi-Channel Communication",
    icon: <TbHeartRateMonitor/>
  },
  {
    title: "360° Feedback & Surveys",
    icon: <PiMoneyWavy/>
  },
  {
    title: "Transport with Live Tracking",
    icon: <MdOutlineInventory/>
  },
  {
    title: "Library Management",
    icon:  <SlWallet/>
  },
  {
    title: "Customization & Report Builders",
    icon: <TbHeartRateMonitor/>
  },
  {
    title: "Analytics & Dashboard",
    icon: <PiMoneyWavy/>
  },
  {
    title: "Alumni Management",
    icon: <MdOutlineInventory/>
  }
];




const Solution = () => {
  // const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="relative w-full h-auto">
      <img
        src={LeftImageLogo}
        alt="left"
        className="z-20 absolute left-0 top-0"
      />
      <img
        src={RightImageLogo}
        alt="right"
        className="z-20 absolute right-0 top-32"
      />
      <div className="w-full h-[37rem] absolute  bg-[#337de2]" />
      <div className="relative w-full max-w-[75rem] mx-auto">
        <div className="text-white relative w-full h-[25rem] flex flex-col justify-center items-center gap-4">
          <h1 className="text-[2.6rem] font-bold font-Poppins">
            Student Information System
          </h1>
          <p className="font-medium">
            Bring together diverse student information in one central hub.
            Manage and track student data, academic records, and more. Book a
            Demo
          </p>
          <NavLink to={'/book'} className="flex items-center font-medium gap-2 text-gray-800 hover:text-sky-500 mt-10 bg-white cursor-pointer px-10 py-3 rounded">
            Book a Demo <FaAngleRight />
          </NavLink>
        </div>
        <div className="z-30 relative w-full mt-7 h-[32rem] bg-white rounded-2xl">
          <img
            src="https://studybase.in/wp-content/uploads/2024/04/Student-Information-System-1536x640.webp"
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-full flex flex-col gap-10 py-20">
          <h1 className="w-1/2 text-3xl font-extrabold font-Poppins">
            Everything you want to know about your students – organized and
            customizable
          </h1>
          <p className="text-black/50 text-base tracking-wide font-medium">
            Effortlessly manage all student data and access it anytime. Drive
            student success at every level through proactive interventions using
            our extensive student information system.
          </p>
          <div className="w-full grid grid-cols-2 ">
            <div className="w-full flex flex-col gap-4">
              {column1.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center gap-6 text-lg text-black/50 font-medium"
                >
                  <IoCheckmarkDoneOutline className="text-2xl text-sky-500" />
                  {item}
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-4">
              {column2.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center gap-6 text-lg text-black/50 font-medium"
                >
                  <IoCheckmarkDoneOutline className="text-2xl text-sky-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-5 mt-5">
            <NavLink to={'/book'}  className="px-6 py-3  font-medium bg-[#2f3437] cursor-pointer flex items-center gap-1 text-white rounded">
              Book a Demo <FaAngleRight />
            </NavLink>
            <NavLink to={'/plans'} className="px-6 py-3  font-medium text-sky-500 border-2 cursor-pointer flex items-center gap-1 rounded">
              View All Packages <FaAngleRight />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f3f7fe] py-20">
        <div className="w-full max-w-[75rem] mx-auto flex flex-col gap-7">
          <h1 className="text-3xl font-extrabold font-Poppins">
            Explore more features
          </h1>
          <h2 className="text-black/50 font-medium tracking-wide">
            Check out the full spectrum of Digii School solutions.
          </h2>
          <div className="w-full p-2 grid grid-cols-4 gap-x-5 gap-y-8">
            {
              featuresWithIcons.map((item, index)=>(
                <div key={index} className="w-full h-[15rem] group bg-white rounded-md border border-gray-100 hover:drop-shadow-xl cursor-pointer transition-all duration-400 ease-out flex flex-col justify-between p-7">
                  <div className="w-full flex flex-col gap-5">
                    <div className="w-max rounded p-2 text-4xl transition-all duration-400 ease-out group-hover:text-white group-hover:bg-sky-500 bg-sky-50 text-sky-500">
                      {item?.icon}
                    </div>
                    <h1 className="text-lg tracking-wide font-semibold">{item?.title}</h1>
                  </div>
                  <button className="flex items-center gap-1">Explore Now <FaAngleRight className="text-sky-500"/></button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="py-10">
      <BookADemo/>
      </div>
    </div>
  );
};

export default Solution;
