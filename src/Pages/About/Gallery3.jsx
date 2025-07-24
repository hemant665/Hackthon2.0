import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const images = [
  "https://picsum.photos/800/500?random=1",
  "https://picsum.photos/800/500?random=2",
  "https://picsum.photos/800/500?random=3",
  "https://picsum.photos/800/500?random=4",
  "https://picsum.photos/800/500?random=5",
  "https://picsum.photos/800/500?random=6",
  "https://picsum.photos/800/500?random=7",
  "https://picsum.photos/800/500?random=8",
  "https://picsum.photos/800/500?random=9",
  "https://picsum.photos/800/500?random=10",
  "https://picsum.photos/800/500?random=11",
  "https://picsum.photos/800/500?random=1",
  "https://picsum.photos/800/500?random=2",
  "https://picsum.photos/800/500?random=3",
  "https://picsum.photos/800/500?random=4",
  "https://picsum.photos/800/500?random=5",
  "https://picsum.photos/800/500?random=6",
  "https://picsum.photos/800/500?random=7",
  "https://picsum.photos/800/500?random=8",
  "https://picsum.photos/800/500?random=9",
  "https://picsum.photos/800/500?random=10",
  "https://picsum.photos/800/500?random=11",
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => {
    setIsOpen(false);
  };
  


  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    // Optional cleanup in case component unmounts while modal is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [isOpen, currentIndex]);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute text-2xl lg:text-6xl  left-0  top-1/2 transform -translate-y-1/2 z-10 text-white  p-2 rounded-full cursor-pointer"
    >
      <FaChevronLeft  />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0  text-2xl lg:text-6xl top-1/2  transform -translate-y-1/2 z-10 text-white  p-2 rounded-full cusrsor-pointer"
    >
      <FaChevronRight  />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (index) => setCurrentIndex(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const thumbnailRef = useRef(null);

  useEffect(() => {
    const scrollContainer = thumbnailRef.current;
    const activeThumb = scrollContainer?.children[currentIndex];
  
    if (scrollContainer && activeThumb) {
      const isDesktop = window.innerWidth >= 1024;
  
      const containerRect = scrollContainer.getBoundingClientRect();
      const thumbRect = activeThumb.getBoundingClientRect();
  
      if (isDesktop) {
        // vertical scroll for desktop
        const offsetTop = activeThumb.offsetTop;
        const thumbHeight = activeThumb.offsetHeight;
        const containerHeight = scrollContainer.offsetHeight;
  
        const scrollTop = offsetTop - containerHeight / 2 + thumbHeight / 2;
        scrollContainer.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      } else {
        // horizontal scroll for mobile
        const offsetLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        const containerWidth = scrollContainer.offsetWidth;
  
        const scrollLeft = offsetLeft - containerWidth / 2 + thumbWidth / 2;
        scrollContainer.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);
  


  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden  rounded-lg shadow-md cursor-pointer"
            onClick={() => openCarousel(index)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed   inset-0 bg-black/75 flex items-center justify-center z-50"
          onClick={closeCarousel}
        >
             <button
              className="absolute top-2 right-2 text-white text-bold   rounded-full px-3 py-1 text-lg md:text-6xl z-50"
              onClick={closeCarousel}
            >
              
              <RxCross2 />
            </button>
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
           
            <Slider ref={sliderRef} {...settings} initialSlide={currentIndex}>
              {images.map((src, index) => (
                   <div
                   key={index}
                   className={`cursor-${activeIndex === index ? 'grabbing' : 'grab'}`}
                   onClick={() => handleClick(index)}
                 >
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </Slider>

           
          </div>
           {/* Custom Scrollable Thumbnails */}
           <div
  ref={thumbnailRef}
  className="mt-4 md:mt-40 bottom-10 lg:relative absolute
             px-2 gap-2
             flex 
             lg:grid grid-cols-2 
             lg:overflow-y-auto lg:h-[30em]
             scrollbar-hide"
  onClick={(e) => e.stopPropagation()}
  style={{
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
  onWheel={(e) => {
    if (window.innerWidth < 1024) {
      e.currentTarget.scrollLeft += e.deltaY;
    }
  }}
  onTouchStart={(e) => e.stopPropagation()}
  onTouchMove={(e) => e.stopPropagation()}
  onTouchEnd={(e) => e.stopPropagation()}
>
  <style>
    {`
      ::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
  {images.map((src, i) => (
    <img
      key={i}
      src={src}
      onClick={() => sliderRef.current.slickGoTo(i)}
      className={`w-20 h-20 lg:w-full lg:h-auto object-cover rounded-md cursor-pointer transition-all duration-200 border-4 ${
        i === currentIndex ? "border-white" : "border-transparent"
      }`}
      alt={`Thumbnail ${i + 1}`}
    />
  ))}
</div>


        </div>
      )}
    </div>
  );
};

export default Gallery;
