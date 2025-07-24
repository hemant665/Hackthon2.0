import React from "react";
import { FaStar } from "react-icons/fa6";
import bg from "../../assets/left-square.png";
import { BiGlasses, BiTargetLock } from "react-icons/bi";
import Gallery from "./Gallery1";
import DemoBookingForm from "./DemoBookingForm";
import BookADemo from "../Book_a_demo/BookADemo";
import Deepak from "../../assets/AboutUs/deepak.jpeg";
import Neeraj from "../../assets/AboutUs/neeraj.jpeg";
import Presentation from "../../assets/AboutUs/Presentation.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Neeraj Verma",
      role: "Founder",
      experience: "Core Tech 2+ years",
      company: "Digii School",
      image: Neeraj,
    },
    {
      name: "Deepak Sharma",
      role: "Co-Founder",
      experience: "EdTech 2+ years",
      company: "Digii School Success",
      image: Deepak,
    },
    // {
    //   name: "Saurabh Vyas",
    //   role: "Chief of Growth",
    //   experience: "OS/Cloud Tech 18+ years",
    //   company: "Digii School Partnerships",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    // },
  ];

  return (
    <div className="mt-16 ">
      <div className="max-w-[75rem] px-4 relative overflow-hidden  flex flex-col gap-5 md:flex-row items-center lg:p-20 rounded-3xl mx-auto bg-[#f3f7fe] min-h-[40em]">
        <img src={bg} className="absolute rotate-90 -top-40 right-0" alt="" />
        <img
          className="md:w-1/2 min-h-[30em] rounded-3xl object-cover"
          src={Presentation}
          alt=""
        />
        <div className="flex-1 items-center justify-center p-2">
          <h2 className="text-3xl font-bold lg:text-[36px] md:leading-[50px] ">
            Building super-powers for Educational Institutions.
          </h2>

          <p className="text-lg mt-5">
            The absence of a robust digital solution has been a persistent
            challenge for Indian educational institutes. At DigiiSchool, we’re
            redefining the educational experience for all stakeholders with our
            comprehensive SaaS platform.
          </p>

          <p className="flex gap-2 items-center text-yellow-500 text-2xl mt-5 md:mt-10">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />{" "}
            <span className="text-black text-[16px]">4.1 out of 5 Ratings</span>
          </p>
          <p className="text-[15px] mt-2">Based on 130+ Reviews on</p>
          <img src="/public/google.png" className="w-28 mt-6" alt="" />
        </div>
      </div>

      <div className="max-w-[75rem] px-3 mx-auto mt-20">
        <h2 className="font-bold text-4xl">
          Our<span className="text-[#337de2]"> Story</span>{" "}
        </h2>
        <p className="my-4 text-lg text-gray-500">
          From a bold idea to a game-changing force, we are charting a brighter
          future for education.
        </p>
        <li className="flex mt-5 items-center gap-2">
          {/* Icon */}
          <span className="w-5 h-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <circle cx="10.5" cy="10" r="10" fill="#A8CBF9" />
              <circle cx="10.2731" cy="9.77211" r="6.13636" fill="#337DE2" />
            </svg>
          </span>

          {/* Text */}
          <span className="text-lg min-w-36 text-gray-800">
            Started in 2017
          </span>

          {/* Line shrinking height from left to right */}
          <span
            className="ml-4 w-full bg-blue-500 block"
            style={{
              height: "8px",
              transformOrigin: "left",
              transform: "scaleY(0.25)",
              transition: "transform 0.5s ease",
            }}
          />
        </li>
        <div className="grid md:grid-cols-3 gap-5  mt-16">
          <div>
            <h2 className="text-2xl mb-5 font-bold">Our Vision</h2>
            <p className="text-lg text-gray-500">
              We saw that 8/10 institutions did not have a good digital platform
              where schools, parents and vendors could interact. We began
              DigiiSchool, a SaaS platform focusing on the digitization of
              educational institutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-5 font-bold">Scaling Up!</h2>
            <p className="text-lg text-gray-500">
            DigiiSchool.com began as a visionary startup addressing the digital gaps in the education sector. Born out of the need for a unified platform connecting schools, parents, and vendors. 
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-5 font-bold">Recognitions</h2>
            <p className="text-lg text-gray-500">
            Recognized by the Government of India with DPIIT certification and iStart Rajasthan for innovation and startup excellence. Proudly incubated at NIMS University. Backed by prestigious institutions and powered by purpose — with many more accolades marking our journey of impact and growth.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 flex items-center justify-center mt-10 md:mt-20 ">
        <div className="w-full min-h-[25em] max-w-[75rem] mx-auto  grid grid-cols-1 md:grid-cols-2   text-white px-8 py-12 gap-10">
          {/* Vision Section */}
          <div className="flex  items-start  text-left ">
            <span className="bg-white text-blue-500 rounded-full text-3xl p-4 mb-4">
              <BiGlasses />
            </span>
            <span className="ml-5">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Our Vision
              </h2>
              <p className="max-w-md text-sm md:text-lg leading-relaxed">
                Digitize every educational institution. Improve learning
                outcomes with data and Analytics. Accelerate the delivery of
                educational solutions. Steer institutions towards prominence and
                excellence.
              </p>
            </span>
          </div>

          {/* Mission Section */}
          <div className="flex  items-start  text-left ">
            <span className="bg-white text-blue-500 rounded-full text-3xl p-4 mb-4">
              <BiTargetLock />
            </span>
            <span className="ml-5">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Our Mission
              </h2>
              <p className="max-w-md text-sm md:text-lg leading-relaxed">
                Empower every institution with a comprehensive SaaS platform.
                Provide seamless digital experience bridging institutions and
                parents. Build tools to leverage data-driven insights and
                analytics. Develop an ecosystem by integrating educational
                products. Create sustained excellence for institutions with
                consultancy.
              </p>
            </span>
          </div>
        </div>
      </div>

      <section className="max-w-[75rem] flex flex-col lg:flex-row gap-6 justify-between mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center lg:text-left flex-1 mb-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet our leadership team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          DigiiSchool is a Rajasthan, India-based company led by a strong founding team — Neeraj Verma (CEO & Founder) and Deepak Sharma (CTO & Co-founder). The team brings deep expertise in building scalable digital solutions, driven by a shared vision to transform the education sector through technology.
          </p>
        </div>  

        <div className="border-t border-gray-200 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-around items-center gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden w-[17rem] transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-top"
              />
              <div className="p-3 md:p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-700 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-2">{member.experience}</p>
                {/* <p className="text-gray-500">{member.company}</p> */}
                {/* <div className="mt-5 bg-[#e3e6e8] hover:bg-blue-500 group cursor-pointer duration-200 w-fit p-2 px-3.5 h-fit rounded-full">
                  <span className="text-gray-800 group-hover:text-white font-bold">
                    in
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative">
        <div className="bg-blue-500 h-[25em] w-full -z-10 absolute top-0"></div>
        <div className="max-w-[75em] mx-auto pt-12 md:pt-28 px-4">
          <h2 className="text-4xl text-white font-bold">Life at DigiiSchool</h2>
          <p className="text-lg text-white mt-2">
            A sneak peek into our day-to-day life architecting educational
            revolution.
          </p>
        </div>
        {/* <div className="pt-10 z-50 max-w-[75rem] mx-auto">
          <Gallery />
        </div> */}
      </div>

      {/* <DemoBookingForm/> */}
      <div className="my-20 px-1">
        <BookADemo />
      </div>
    </div>
  );
};

export default About;
