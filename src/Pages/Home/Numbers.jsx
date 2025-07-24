import { useEffect, useRef, useState } from "react";
import { FaUniversity, FaDownload } from "react-icons/fa";

const Numbers = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  const counters = [
    {
      id: "count1",
      target: 8,
      suffix: "+",
      icon: <FaUniversity />,
      label: "Happy Institutions",
    },
    {
      id: "count2",
      target: 1000,
      suffix: "+",
      icon: <FaDownload />,
      label: "Feedback",
    },
    {
      id: "count3",
      target: 1000,
      suffix: " L+",
      icon: <FaUniversity />,
      label: "Fee Payments",
    },
  ];

  const formatNumber = (num) => {
    return num.toLocaleString("en-IN");
  };

  const animateCount = (setCount, target, suffix, duration = 2000) => {
    const frameRate = 60; // 60 frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(progress * target);
      setCount(formatNumber(current) + suffix);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(formatNumber(target) + suffix); // Ensure exact final value
      }
    };

    requestAnimationFrame(counter);
  };

  const startCounting = () => {
    if (hasCounted) return;
    setHasCounted(true);

    counters.forEach(({ id, target, suffix }) => {
      const setCount = (value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };
      animateCount(setCount, target, suffix);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-white flex items-center justify-center ">
      <div className="absolute ">
        <div
          ref={statsRef}
          id="stats"
          className="max-w-[80em] w-full mx-auto flex-col md:flex-row md:p-10 bg-[#2D7AEF] rounded-2xl px-8 py-4 flex justify-between md:items-center space-y-1 space-x-25"
        >
          {counters.map((counter) => (
            <div key={counter.id} className="flex items-center space-x-4">
              <div className="bg-[#3F8BFF] rounded-full w-12 xl:w-24 xl:h-24 h-12 flex items-center justify-center">
                <span className="text-white text-lg lg:text-4xl">
                  {counter.icon}
                </span>
              </div>
              <div className="text-white">
                <p
                  id={counter.id}
                  className="font-semibold  lg:text-3xl xl:text-4xl leading-none"
                >
                  0
                </p>
                <p className="text-xs xl:text-xl font-light mt-1">
                  {counter.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
