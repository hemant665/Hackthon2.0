// Player.jsx
import React from 'react';
import { DiResponsive,  } from "react-icons/di";

const FeatureCard = ({ icon, title, description, descriptionColor = 'text-gray-400' }) => (
  <article className="bg-white rounded-lg p-6 shadow-sm flex items-start flex-col gap-2 md:gap-5  ">
    <img 
      alt={`${title} icon`} 
      className="w-6 md:w-10 md:h-10 h-6 flex-shrink-0 mt-1" 
      src={icon} 
      style={{ color: '#4a90e2' }} 
    />
    <div className='min-h-20 lg:min-h-10'>
      <h3 className="font-semibold text-gray-900 text-base md:text-2xl leading-5">{title}</h3>
      <p className={`${descriptionColor} text-sm md:text-md leading-5 mt-2`}>{description}</p>
    </div>
  </article>
);

const Player = () => {
  const leftFeatures = [
    {
      icon: "https://storage.googleapis.com/a1aa/image/792588c0-c761-47fa-9b90-99479ef841b6.jpg",
      title: "User-Friendly Interface",
      description: "Enjoy a seamless and intuitive learning experience across all devices",
    },
    {
      icon: "https://storage.googleapis.com/a1aa/image/8c0842c3-3bdb-4f93-d35b-1c949b0ce581.jpg",
      title: "Hassle-Free Onboarding",
      description: "No-code setup with full customer support for schools and teachers"
    },
    {
      icon: "https://storage.googleapis.com/a1aa/image/9bffe68f-821b-4a26-45cd-8e272e4fc93f.jpg",
      title: "Tailored Branding",
      description: "Customizable platform to reflect your school’s identity and colors"
    },
    {
      icon: "https://storage.googleapis.com/a1aa/image/f81e84d2-fbe9-4e8e-239f-0dfb2ae8f127.jpg",
      title: "Smooth Integration",
      description: "Easily connects with your current school management and digital systems"
    }
  ];
  
  const rightFeatures = [
    {
      icon: "https://storage.googleapis.com/a1aa/image/65a561e6-98ae-4f0a-aa24-e5666ca611c4.jpg",
      title: "Cross-Platform Access",
      description: "Works seamlessly on iOS, Android, desktop, and mobile browsers"
    },
    {
      icon: "https://storage.googleapis.com/a1aa/image/2f28fb4e-0747-4815-e9d7-a5feeb37f3fb.jpg",
      title: "Modern Technology Stack",
      description: "Powered by Microsoft Azure, REST APIs, and scalable infrastructure"
    },
    {
      icon: "https://storage.googleapis.com/a1aa/image/e2fc0642-7633-4c75-d0a2-bb431546c905.jpg",
      title: "Advanced Data Security",
      description: "End-to-end encryption and GDPR-compliant data protection for students"
    },
    {
      icon: "https://storage.googleapis.com/a1aa/image/1cd035eb-d51d-4a59-9dff-533d870a44ec.jpg",
      title: "Expertly Engineered",
      description: "Developed by industry professionals with over 20 years of experience"
    }
  ];
  

  return (
    <div className="bg-[#e9f2fb] py-10 flex items-center justify-center p-2 ">
      <main className="max-w-[75em] w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {/* Left features column */}
        <section className="xl:space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-5">
          {leftFeatures.map((feature, index) => (
            <FeatureCard key={`left-${index}`} {...feature} />
          ))}
        </section>

        {/* Center player section */}
        <section className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-extrabold leading-7 md:leading-8 max-w-[9em]">
            <span className="text-[#3b82f6]">Building the ecosystem</span>
            <span>,</span>
            <span> not mere players</span>
          </h2>
          <div className="relative bg-[#8ca9e3] rounded-lg w-48 h-64 md:w-56 md:h-72 flex items-center justify-center overflow-visible">
            <img 
              alt="Smiling man in white shirt making OK gesture on blue background" 
              className="relative z-10 w-48 h-64 md:w-68 md:h-80 object-cover rounded-lg" 
              src="https://storage.googleapis.com/a1aa/image/ebca5823-4420-4acb-4d52-d4c0112e8a7c.jpg" 
            />
            <div className="absolute -left-10 top-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-20">
              <img 
                alt="Gear icon in blue inside white circle" 
                className="w-8 h-8" 
                src="https://storage.googleapis.com/a1aa/image/a049be71-94d8-4de0-b2bb-6f5ac19efb74.jpg" 
                style={{ color: '#4a90e2' }} 
              />
            </div>
            <div className="absolute -right-10 top-28 w-16 h-16 bg-white rounded-full flex items-center justify-center z-20">
              <img 
                alt="Shield icon in blue inside white circle" 
                className="w-8 h-8" 
                src="https://storage.googleapis.com/a1aa/image/263df949-5d10-43de-8e4e-f656a39f6f83.jpg" 
                style={{ color: '#4a90e2' }} 
              />
            </div>
            <svg 
              aria-hidden="true" 
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
              fill="none" 
              viewBox="0 0 224 288" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 46 L72 128" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="2" />
              <path d="M202 120 L152 160" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="2" />
            </svg>
          </div>
        </section>

        {/* Right features column */}
        <section className="xl:space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-5">
          {rightFeatures.map((feature, index) => (
            <FeatureCard key={`right-${index}`} {...feature} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Player;