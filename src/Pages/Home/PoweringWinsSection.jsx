import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Parents from "../../assets/Powering/Home_parents_portal.png";
import Parents_Portal from "../../assets/Powering/Parents_Portal.png";
import Teacher_Portal from "../../assets/Powering/Teacher_Portal.png";
import TeacherPortal from "../../assets/Powering/TeacherPortal.png";
import Administrative2 from "../../assets/Powering/Administrative2.png";
import Administrative1 from "../../assets/Powering/Administrative1.png";

const PoweringWinsSection = () => {
  const [activeTab, setActiveTab] = useState("Parents & Students");

  const tabs = ["Parents & Students", "Faculty", "Management"];
  const tabData = {
    "Parents & Students": {
      featuresTop: [
        {
          title: "Academic Progress Tracking",
          description:
            "Track your child’s academic growth and connect easily with faculty at Digii School.",
        },
        {
          title: "Secure Access to School Data",
          description:
            "Access documents, attendance, reports, and institute details securely anytime.",
        },
      ],
      featuresBottom: [
        {
          title: "Real-Time Child Safety Alerts",
          description:
            "Monitor transport with live GPS tracking and instant safety notifications.",
        },
        {
          title: "Online Fee Payment Options",
          description:
            "Pay school and transport fees securely online with multiple gateway choices.",
        },
      ],
      topImage: Parents,
      bottomImage: Parents_Portal,
    },
    Faculty: {
      featuresTop: [
        {
          title: "Smart Class Management",
          description:
            "Manage classes, attendance, and student performance easily with Digii School.",
        },
        {
          title: "Advanced Grading Tools",
          description:
            "Simplify grading with powerful analytics and automated evaluation features.",
        },
      ],
      featuresBottom: [
        {
          title: "Unified Communication Portal",
          description:
            "Connect instantly with students and parents via Digii School’s secure system.",
        },
        {
          title: "Digital Resource Library",
          description:
            "Access, share, and manage teaching resources easily anytime, anywhere.",
        },
      ],
      topImage: Teacher_Portal,
      bottomImage: TeacherPortal,
    },
    Management: {
      featuresTop: [
        {
          title: "Administration Dashboard",
          description:
            "Manage every aspect of your institution with Digii School’s smart dashboard.",
        },
        {
          title: "Financial Analytics & Reports",
          description:
            "Track fees, expenses, and financial data with powerful insights.",
        },
      ],
      featuresBottom: [
        {
          title: "Smart Staff Management",
          description:
            "Handle faculty schedules, records, and performance efficiently.",
        },
        {
          title: "Facility & Infrastructure Planning",
          description:
            "Manage resources and plan infrastructure needs with advanced tools.",
        },
      ],
      topImage: Administrative2,
      bottomImage: Administrative1,
    },
  };

  const currentData = tabData[activeTab];

  return (
    <div className="bg-white mt-15 text-gray-700">
      

        {/* Bottom navigation centered with only active item in blue */}
        <nav className="mb-10 max-w-2xl mx-auto">
          <ul className="flex  flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-medium whitespace-nowrap">
            {tabs.map((tab) => (
              <li key={tab} className="relative">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`pb-1 px-1 transition-all duration-300 ease-in-out 
            ${
              activeTab === tab
                ? "text-[#2B6CB0] font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
                >
                  {tab}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#2B6CB0] transition-all duration-300 ease-in-out 
              ${activeTab === tab ? "w-full" : "w-0"}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      
      <div className="max-w-[75em] mt-15 mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left side: Title and two items */}
          <div className="space-y-20 max-w-md">
            <h2 className="text-3xl -mt-20 sm:text-4xl font-semibold text-[#2B6CB0] whitespace-nowrap">
              Powering <span className="text-black font-bold">wins</span> for
              all
            </h2>
            <div className="space-y-8">
              {currentData.featuresTop.map((feature, index) => (
                <div key={index} className="flex w-full items-center space-x-4">
                  <button
                    aria-label={`${feature.title} arrow`}
                    className="flex items-center md:w-14 md:h-14 justify-center w-8 h-8 rounded-full  bg-[#ebf2fd] text-[#2B6CB0] text-lg shrink-0 hover:bg-blue-50 transition-colors"
                  >
                    <FiChevronRight className="text-sm md:text-4xl font-bold" />
                  </button>
                  <div>
                    <h3 className="font-semibold text-black text-base sm:text-lg whitespace-nowrap">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 max-w-[320px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="bg-[#E6F0FF] rounded-lg p-6 flex justify-center items-center">
            <img
              alt={`${activeTab} feature`}
              className="rounded max-w-full h-auto object-cover"
              height="220"
              src={currentData.topImage}
              width="400"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left side: Image */}
          <div className="bg-[#E6F0FF] rounded-lg p-6 flex justify-center items-center max-w-lg mx-auto md:mx-0">
            <img
              alt={`${activeTab} feature`}
              className="rounded max-w-full h-auto object-cover"
              height="280"
              src={currentData.bottomImage}
              width="600"
            />
          </div>

          {/* Right side: Two items */}
          <div className="space-y-10 max-w-md mx-auto md:mx-0">
            {currentData.featuresBottom.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <button
                  aria-label={`${feature.title} arrow`}
                  className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14 rounded-full bg-[#ebf2fd] text-[#2B6CB0] text-lg shrink-0 hover:bg-blue-50 transition-colors"
                >
                  <FiChevronRight className="text-sm md:text-4xl font-bold" />
                </button>
                <div>
                  <h3 className="font-semibold text-black text-base sm:text-lg whitespace-nowrap">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 max-w-[320px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PoweringWinsSection;
