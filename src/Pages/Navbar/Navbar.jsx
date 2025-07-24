import React, { useState, useEffect, useRef } from "react";
import { NAVIGATION, solution } from "./Navlinks";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

//icons
import { FaAngleDown } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <nav className="z-40 fixed top-0 left-0 w-full h-16 sm:h-25
     border-b border-gray-300 bg-[#f3f7fe] ">
      <div className="relative w-full max-w-[75rem] h-full mx-auto hidden lg:flex justify-between items-center gap-4 px-4">
        <button onClick={()=>navigate('/')} className="text-sky-500 cursor-pointer text-3xl font-Poppins font-extrabold">
          Digii School
        </button>
        <div className="w-max h-auto flex justify-between items-center gap-2">
          {NAVIGATION.map((nav) => (
            <NavLink
              onMouseEnter={() => nav?.title == "Solutions" && setShow(true)}
              onMouseLeave={() => nav?.title == "Solutions" && setShow(false)}
              key={nav?.title}
              to={nav?.segment}
              className={({ isActive }) =>
                ` p-2 text-sm font-medium transition-color flex items-center gap-1 easeOut duration-300 ${
                  isActive ? "text-sky-500" : "text-gray-700 hover:text-sky-500"
                }`
              }
            >
              {nav?.title}
              {nav?.title == "Solutions" && <FaAngleDown />}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={()=>navigate('/book')} className="bg-[#2f3437] text-sm text-white px-4 py-2 cursor-pointer rounded">
            Book a Demo
          </button>
          <button onClick={()=>navigate('/login')} className="px-4 py-1 border border-gray-300 bg-white text-sm cursor-pointer">
            Login
          </button>
        </div>
        <motion.div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          initial={{ opacity: 0, display: "none" }}
          animate={
            show
              ? { opacity: 1, display: "block" }
              : { opacity: 0, display: "none" }
          }
          transition={show ? { duration: 0.3 } : { duration: 0.3, delay: 0.2 }}
          className="absolute top-20 left-0 w-full min-h-[20rem] bg-white border-b border-x border-gray-200 rounded-b-3xl shadow-xl p-4"
        >
          <div className="w-full flex items-center text-sm font-semibold gap-1">
            <h1>Solutions</h1>
            <hr className="w-full text-gray-300" />
          </div>
          <div className="w-full h-auto grid grid-cols-4 grid-rows-1 gap-4 p-2">
            <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
              <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                {solution?.[0]?.heading}
              </h1>
              <ul className="w-full flex flex-col">
                {solution?.[0]?.list?.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                      index !== solution?.[0]?.list?.length - 1 &&
                      "border-b-[0.1px] border-sky-500/30"
                    }`}
                  >
                    <FiCheckCircle className="text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
              <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                {solution?.[1]?.heading}
              </h1>
              <ul className="w-full flex flex-col">
                {solution?.[1]?.list?.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                      index !== solution?.[1]?.list?.length - 1 &&
                      "border-b-[0.1px] border-sky-500/30"
                    }`}
                  >
                    <FiCheckCircle className="text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <h1 className="text-base mt-4 font-semibold min-h-10 border-b border-sky-500">
                {solution?.[2]?.heading}
              </h1>
              <ul className="w-full flex flex-col">
                {solution?.[2]?.list?.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                      index !== solution?.[2]?.list?.length - 1 &&
                      "border-b-[0.1px] border-sky-500/30"
                    }`}
                  >
                    <FiCheckCircle className="text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
              <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                {solution?.[3]?.heading}
              </h1>
              <ul className="w-full flex flex-col">
                {solution?.[3]?.list?.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                      index !== solution?.[3]?.list?.length - 1 &&
                      "border-b-[0.1px] border-sky-500/30"
                    }`}
                  >
                    <FiCheckCircle className="text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <h1 className="text-base mt-4 font-semibold min-h-10 border-b border-sky-500">
                {solution?.[4]?.heading}
              </h1>
              <ul className="w-full flex flex-col">
                {solution?.[4]?.list?.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                      index !== solution?.[4]?.list?.length - 1 &&
                      "border-b-[0.1px] border-sky-500/30"
                    }`}
                  >
                    <FiCheckCircle className="text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
              <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                {solution?.[5]?.heading}
              </h1>
              <ul className="w-full flex flex-col">
                {solution?.[5]?.list?.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                      index !== solution?.[5]?.list?.length - 1 &&
                      "border-b-[0.1px] border-sky-500/30"
                    }`}
                  >
                    <FiCheckCircle className="text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className=" relative w-full h-full lg:hidden flex justify-between items-center px-4">
        <h1 className="text-sky-500 text-xl sm:text-3xl font-Poppins font-extrabold">
          Digii School
        </h1>
        <div className="flex items-center gap-4 sm:gap-7">
          <button onClick={()=>navigate('/book')} className="px-2 sm:px-4 sm:text-base text-xs py-1 rounded border border-gray-300 font-medium bg-white">
            Book a Demo
          </button>
          <button
            ref={buttonRef}
            onClick={() => setShowMenu(!showMenu)}
            className={`text-4xl cursor-pointer ${
              showMenu ? "text-sky-500" : "text-gray-800"
            }`}
          >
            <HiOutlineMenuAlt1 />
          </button>
        </div>
        <motion.div
          ref={panelRef}
          initial={{ height: 0 }}
          animate={showMenu ? { height: "auto" } : { height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className=" w-full max-h-screen bg-white shadow absolute overflow-y-auto top-16 sm:top-20 left-0"
        >
          <div className="w-full h-full flex flex-col justify-start items-start gap-2 px-4 py-5 pb-28">
            <div className="w-full h-auto ">
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="text-left w-full pb-2 border-b-[0.1px] flex justify-between font-medium border-gray-300"
              >
                Solutions <FaAngleDown className="text-xl text-gray-500 mr-2" />
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={showSubMenu ? { height: "auto" } : { height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full overflow-x-auto"
              >
                <div className="w-full h- grid grid-cols-1 gap-4 p-2 overflow-x-auto">
                  <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
                    <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                      {solution?.[0]?.heading}
                    </h1>
                    <ul className="w-full flex flex-col">
                      {solution?.[0]?.list?.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                            index !== solution?.[0]?.list?.length - 1 &&
                            "border-b-[0.1px] border-sky-500/30"
                          }`}
                        >
                          <FiCheckCircle className="text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
                    <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                      {solution?.[1]?.heading}
                    </h1>
                    <ul className="w-full flex flex-col">
                      {solution?.[1]?.list?.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                            index !== solution?.[1]?.list?.length - 1 &&
                            "border-b-[0.1px] border-sky-500/30"
                          }`}
                        >
                          <FiCheckCircle className="text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h1 className="text-base mt-4 font-semibold min-h-10 border-b border-sky-500">
                      {solution?.[2]?.heading}
                    </h1>
                    <ul className="w-full flex flex-col">
                      {solution?.[2]?.list?.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                            index !== solution?.[2]?.list?.length - 1 &&
                            "border-b-[0.1px] border-sky-500/30"
                          }`}
                        >
                          <FiCheckCircle className="text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
                    <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                      {solution?.[3]?.heading}
                    </h1>
                    <ul className="w-full flex flex-col">
                      {solution?.[3]?.list?.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                            index !== solution?.[3]?.list?.length - 1 &&
                            "border-b-[0.1px] border-sky-500/30"
                          }`}
                        >
                          <FiCheckCircle className="text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h1 className="text-base mt-4 font-semibold min-h-10 border-b border-sky-500">
                      {solution?.[4]?.heading}
                    </h1>
                    <ul className="w-full flex flex-col">
                      {solution?.[4]?.list?.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                            index !== solution?.[4]?.list?.length - 1 &&
                            "border-b-[0.1px] border-sky-500/30"
                          }`}
                        >
                          <FiCheckCircle className="text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full h-full bg-[#f3f7fe] p-2 border border-gray-100 rounded-lg">
                    <h1 className="text-base font-semibold min-h-10 border-b border-sky-500">
                      {solution?.[5]?.heading}
                    </h1>
                    <ul className="w-full flex flex-col">
                      {solution?.[5]?.list?.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full text-xs font-medium text-gray-600 flex py-2 items-center cursor-pointer gap-1 ${
                            index !== solution?.[5]?.list?.length - 1 &&
                            "border-b-[0.1px] border-sky-500/30"
                          }`}
                        >
                          <FiCheckCircle className="text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            {NAVIGATION?.map(
              (nav, index) =>
                index !== 0 && (
                  <NavLink
                    key={index}
                    to={nav?.segment}
                     onClick={() => setShowMenu(false)}
                    className={({ isActive }) =>
                      `w-full border-b-[0.1px] border-gray-300 font-medium pb-2 ${
                        isActive ? "bg-sky-500 text-white rounded" : "bg-white"
                      }`
                    }
                  >
                    {nav?.title}
                  </NavLink>
                )
            )}
            {/* <button onClick={()=> navigate('/login')} className="bg-black text-white px-8 py-2 font-medium rounded text-sm ">
              Login
            </button> */}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
