import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Deepak Sharma",
      role: "Chief Technology Officer",
      avatar: "https://storage.googleapis.com/a1aa/image/76acb9f5-1955-45e3-3800-4641216e39d7.jpg",
      text: "At Digii School, we are building the future of education — smart, scalable, and student-centric. Our next phase focuses on AI-driven learning platforms, immersive digital classrooms, and inclusive education access for all. With a strong foundation in technology and a passion for innovation, we are committed to empowering every learner to reach their full potential."
    },
    {
      id: 2,
      name: "Bhavik",
      role: "Server Administrator",
      avatar: "https://storage.googleapis.com/a1aa/image/76acb9f5-1955-45e3-3800-4641216e39d7.jpg",
      text: "We ensure that innovation is matched with reliability. Our robust server architecture guarantees high uptime, fast performance, and secure access to learning resources anytime, anywhere. As we scale into future-ready solutions, our infrastructure remains strong, secure, and optimized to support the growing digital learning community."
    },
    {
      id: 3,
      name: "Namisha Rani",
      role: "Designer",
      avatar: "https://storage.googleapis.com/a1aa/image/07c2348a-99fe-4883-c912-8547c3ade525.jpg",
      text: "At Digii School, every design choice reflects clarity, creativity, and a learner-first approach. We craft intuitive interfaces and immersive visuals that make education not just accessible, but engaging and inspiring. As we move forward, our focus remains on creating seamless, modern experiences that empower every learner’s journey."
    },
    {
      id: 4,
      name: "Poonam Panchariya",
      role: "Developer",
      avatar: "https://storage.googleapis.com/a1aa/image/07c2348a-99fe-4883-c912-8547c3ade525.jpg",
      text: "At Digii School, we blend performance with simplicity to create fast, responsive, and user-friendly interfaces. Every interaction is designed to be smooth, accessible, and engaging for learners of all ages. As we evolve, our focus remains on delivering seamless digital experiences that make learning effortless and enjoyable."
    },
    {
      id: 5,
      name: "Kuldeep Jangra",
      role: "Human Resources",
      avatar: "https://storage.googleapis.com/a1aa/image/76acb9f5-1955-45e3-3800-4641216e39d7.jpg",
      text: "At Digii School, we believe that great teams build great futures. Our culture fosters innovation, collaboration, and continuous growth. As we expand into new educational frontiers, we are committed to nurturing talent that drives excellence and empowers change in digital learning."
    },
    {
      id: 6,
      name: "Lalit Kumar",
      role: "Developer",
      avatar: "https://storage.googleapis.com/a1aa/image/76acb9f5-1955-45e3-3800-4641216e39d7.jpg",
      text: "At Digii School, we harness the power of React to build fast, dynamic, and scalable learning platforms. Every component is designed for performance, flexibility, and a seamless user experience. As we innovate further, we stay committed to delivering responsive, interactive, and future-ready education solutions."
    }, {
      id: 7,
      name: "Krishnakant Bhardwaj",
      role: "Manager",
      avatar: "https://storage.googleapis.com/a1aa/image/76acb9f5-1955-45e3-3800-4641216e39d7.jpg",
      text: "At Digii School, we believe in structured growth, smart execution, and a learner-focused vision. Our team works with precision and passion to deliver top-quality educational experiences. As we move forward, we remain committed to driving innovation, efficiency, and impactful results across every project."
    }, 
    {
      id: 8,
      name: "Rakshit Verma",
      role: "Business Development Manager",
      avatar: "https://storage.googleapis.com/a1aa/image/76acb9f5-1955-45e3-3800-4641216e39d7.jpg",
      text: "We are not just building platforms — we are building opportunities. With a strong focus on partnerships, innovation, and growth, we are expanding our reach to make quality education accessible to every learner. Our future is driven by collaboration, strategic vision, and a passion for impact."
    },
  ];

  const testimonialSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const avatarSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-[#f9faf9] to-[#f0f5f0] min-h-[30em] flex flex-col items-center justify-center px-4 py-12 font-['Poppins']">
      <section className="max-w-[14em] sm:max-w-[18em] md:max-w-[24em] w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a3d] leading-tight">
          What Our Happy{' '}
          <span className="relative mx-2 inline-block">
            <span>Users</span>
            <img 
              src="/public/Vector.svg" 
              className="absolute top-0 h-full scale-125" 
              alt="underline decoration" 
            />
          </span>{' '}
          Say
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 mb-6 sm:mb-8 md:mb-10">
          Read real experience of our user
        </p>
      </section>
      
      <div className="w-full max-w-[75em] mx-auto px-2 sm:px-4">
        <div className="mb-8 max-w-[20em] mx-auto">
          <Slider {...avatarSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-6">
                <img
                  alt={`Avatar of ${testimonial.name}`}
                  className="rounded-full object-cover border-2 border-white mx-auto transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 slick-center:scale-200"
                  src={testimonial.avatar}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>

        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`py-6 lg:px-8 px-4 sm:py-8 text-center focus:outline-none ${
                testimonialSettings.slidesToShow === 3 && index % 3 === 1 ? 'border-x border-gray-200' : ''
              } ${
                testimonialSettings.slidesToShow === 1 ? 'border-none border-gray-200' : ''
              }`}
            >
              <p className="text-xs min-h-[12em] sm:text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-sm sm:text-base text-[#1a1a3d] mb-0">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;