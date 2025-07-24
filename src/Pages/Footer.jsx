import React, { useState } from "react";
import PlayStore from "../assets/google-play.webp";
import AppStore from "../assets/app-store.webp";
import { solution, NAVIGATION } from "./Navbar/Navlinks";
import { motion } from "motion/react"
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//icons
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaAngleDown } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Mr.",
      name: "",
      designation: "",
      review: "",
    },
  });
  const navigate = useNavigate();
  const [linkIndex, setLinkIndex] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="w-full bg-[#f3f7fe]">
      <div className="w-full max-w-[75rem] h-full mx-auto grid grid-cols-1 grid-rows-[1fr_5rem]">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-[40%_30%_25%] grid-rows-1 gap-5 py-20 px-10">
          <div className="w-full h-full ">
            <div className="w-full flex flex-col gap-5">
              <h1 className="text-2xl font-extrabold text-sky-500">
                Digii School
              </h1>
              <p className="text-sm font-medium tracking-wide text-gray-500 ">
                All in SaaS platform for educational institutions.
              </p>
              <div className="w-full flex items-center gap-5 text-2xl ">
                <a href="https://www.instagram.com/digiischool/?igsh=MTNqdnAxaWI1YTJtYg%3D%3D#" target="_blank"><FaInstagram className="hover:text-sky-500 transition-all duration-200 hover:scale-110" /></a>
                
                <a href="https://www.linkedin.com/showcase/digiischool/" target="_blank"><IoLogoLinkedin className="hover:text-sky-500 transition-all duration-200 hover:scale-110" /></a>
                
                <a href="https://www.facebook.com/DigiiSchool?rdid=82r4xOtm5b0wlP0l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19sneNVBkf%2F#"  target="_blank"><IoLogoFacebook className="hover:text-sky-500 transition-all duration-200 hover:scale-110" /></a>
                
                <a href="https://www.threads.com/@digiischool"  target="_blank"><FaXTwitter className="hover:text-sky-500 transition-all duration-200 hover:scale-110" /></a>
                
                {/* <FaYoutube className='hover:text-sky-500 transition-all duration-200 hover:scale-110'/> */}
                
              </div>
              {/* <div className='w-full flex flex-col gap-5 mt-6'>
                    <h1 className='text-black/70 font-medium tracking-wide'>Download Digii School apps</h1>
                    <div className='w-full max-w-[22rem] grid grid-cols-2 gap-4'>
                        <img src={PlayStore} alt="playStore-image" className='w-full h-full object-cover' />
                        <img src={AppStore} alt="appStore-image" className='w-full h-full object-cover' />
                    </div>
                </div> */}
              <div className="mt-5">
                <h1 className="font-bold text-black/80 mb-2 w-full text-center text-2xl">
                  Write your review
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="relative w-full flex flex-col gap-3 "
                >
                  <div className="w-full flex items-center gap-4">
                    <div className="w-full h-full flex flex-col ">
                      {/* <label htmlFor="name" className='text-sm'>Full Name</label> */}
                      <div className="w-full flex gap-1">
                        <select
                          {...register("title", { required: true })}
                          className="p-1 text-sm rounded outline-none border border-gray-300 focus:border-gay-400"
                        >
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                        <input
                          id="name"
                          type="text"
                          placeholder="Full Name"
                          {...register("name", {
                            required: "please enter your full name",
                          })}
                          className="w-full p-1 placeholder:text-sm outline-none border border-gray-300 focus:border-gray-400 rounded"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      {/* <label htmlFor="designation" className='text-sm'>Designation</label> */}
                      <div className="w-full">
                        <input
                          type="text"
                          className="w-full p-1 placeholder:text-sm rounded  outline-none border border-gray-300 focus:border-gray-400"
                          placeholder="Designation"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    {/* <label htmlFor="review" className='text-sm'>Your Review</label> */}
                    <textarea
                      rows={4}
                      id="review"
                      {...register("review", {
                        required: "please write your review",
                        min: { value: 10, message: "write at least 10 char" },
                      })}
                      className="border border-gray-300 focus:border-gray-400 outline-none rounded resize-none placeholder:text-sm p-1"
                      placeholder="Your thought but our feedback!"
                    ></textarea>
                  </div>
                  <button className="text-white font-semibold px-7 py-2 rounded bg-sky-500">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-2">
            {solution.map((item, index) => (
              <div
                onClick={() =>
                  linkIndex !== null ? setLinkIndex(null) : setLinkIndex(index)
                }
                key={index}
                className="w-full h-auto overflow-hidden"
              >
                <h1 className="w-full flex cursor-pointer py-2 items-center justify-between pr-4 font-bold">
                  {item?.heading}
                  <FaAngleDown />
                </h1>
                <motion.ul
                  initial={{ height: 0 }}
                  animate={{ height: linkIndex == index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col  "
                >
                  {item?.list.map((i, index) => (
                    <li
                      key={index}
                      className="w-full py-1 text-sm cursor-pointer hover:text-sky-500 duration-200 font-medium text-black/80 flex items-center gap-2"
                    >
                      <FiCheckCircle className=" text-sky-500" />
                      {i}
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
          <div className="w-full h-full  grid grid-cols-2 gap-4 grid-rows-1">
            <div className="w-full flex flex-col gap-5">
              <h1 className="font-bold">Pages</h1>
              <ul className="w-full flex flex-col gap-3">
                {NAVIGATION.map(
                  (i, index) =>
                    index !== 0 && (
                      <li
                        onClick={() => navigate(i?.segment)}
                        key={index}
                        className="text-sm cursor-pointer hover:text-sky-700 text-black/80 font-medium"
                      >
                        {i?.title}
                      </li>
                    )
                )}
                <li
                  onClick={() => navigate("/sitemap")}
                  className="text-sm cursor-pointer hover:text-sky-700 text-black/80 font-medium"
                >
                  Site map
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-5">
              <h1 className="font-bold">Polices</h1>
              <ul className="w-full flex flex-col gap-3">
                <li className="text-sm text-black/80 cursor-pointer hover:text-sky-700 font-medium">
                  Terms of use
                </li>
                <li className="text-sm text-black/80 cursor-pointer hover:text-sky-700 font-medium">
                  Privacy policy
                </li>
                <li className="text-sm text-black/80 cursor-pointer hover:text-sky-700 font-medium">
                  Refund policy
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full border-t font-medium border-sky-500 flex items-center justify-center p-3">
          <h1>© 2025 Digii School Tech Pvt. Ltd. All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
