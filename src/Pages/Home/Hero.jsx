import React from "react";
import HeroImage from "../../assets/HeroSection/Hero.jpg";

const Hero = () => {
  // bg-[#FAFBFA]
  return (
    <div className=" bg-gradient-to-l from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-12 h-[45rem] ">
      <div className="max-w-[75em]  max-h-[50rem] w-full flex flex-col md:flex-row items-center  justify-between gap-10 md:gap-20">
        {/* Text Section */}
        <div className="flex flex-col max-w-xl md:max-w-md space-y-6">
          <h1 className="text-[32px] md:text-[40px] xl:text-6xl font-extrabold leading-[1.1] text-[#0B0B3B]">
            Empower Your
            <br />
            Learning with{" "}
            <span className="relative ml-3 inline-block">
              <span className="text-blue-500">Digii School</span>
              {/* <img
                src="/public/Vector.svg"
                className="absolute top-0 scale-95"
                alt=""
              /> */}
            </span>
            <br />
            Smarter Education
          </h1>
          <p className="text-[#9B9B9B] text-sm md:text-xl font-normal leading-relaxed max-w-md">
            Unlock quality learning experiences with interactive tools,
            personalized content, and expert guidance — all in one smart
            platform.
          </p>

          {/* <button
            type="button"
            className="w-max bg-blue-500 hover:bg-blue-800 transition-colors text-white text-sm md:text-xl font-semibold rounded-full py-3 px-7 cursor-pointer"
          >
            Start 14 Days Trial
          </button> */}
        </div>

        {/* Image Section */}
        <div className="relative flex-shrink-0 max-w-[320px] sm:max-w-[400px] lg:max-w-[600px]">
          {/* <img
            src="https://storage.googleapis.com/a1aa/image/b3427c58-70a7-4d51-b13f-85c41a77b0a3.jpg"
            alt="Mobile app screen showing transfer and recent contacts with user avatars and icons"
            className="absolute top-8 left-0 w-[60%] rounded-2xl shadow-lg"
            width={600}
            height={400}
          /> */}
          <img
            src={HeroImage}
            alt="Mobile app screen showing cards, recent category icons, and transactions with financial data"
            className="relative w-full rounded-2xl "
            width={600}
            height={400}
          />
          {/* <img
            src="https://storage.googleapis.com/a1aa/image/bce485f7-5cf0-409e-c40e-61eac86c588c.jpg"
            alt="Small card with graph and user list with avatars and amounts"
            className="absolute bottom-0 right-0 w-[35%] rounded-xl shadow-md"
            width={180}
            height={120}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
