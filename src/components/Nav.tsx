"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isScrolled ? "pb-[70px]" : ""}>
      <div
        className={`
    hidden md:flex items-start justify-between
    transition-all duration-500 ease-in-out
    ${ isScrolled ? "fixed top-0 left-0 right-0 bg-[#0a0a0a] shadow-lg border-b z-50 py-3 px-[100px]" : "sticky top-0 " }
  `}
        data-aos={isScrolled ? "fade-down" : "fade-down"}
      >
        <div className="flex items-center gap-[16px]">
          <div className="overflow-hidden max-h-[52px] max-w-[52px] rounded-full bg-[#48484A] border-2 border-white">
            <Image
              src="/Assets/chika.jpeg"
              alt="Profile Picture"
              width={52}
              height={52}
              className="rounded-full object-cover object-top -translate-y-3"
              loading="lazy"
              priority={false}
            />
          </div>
          <div className="space-y-[8px]">
            <p className="font-[500] text-[18px] md:text-[20px]">
              Product Manager
            </p>
            <p className="font-[400] text-[14px] md:text-[16px]">
              Chikadibia Obiorah 
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-[16px] text-[16px] font-[500]"
          data-aos="fade-left"
        >
          <a href="#home" className="p-[8px]">
            Home
          </a>
          <a href="#experience" className="p-[8px]">
            Experience
          </a>
          <a href="#projects" className="p-[8px]">
            Projects
          </a>
          <a href="http://www.linkedin.com/in/samuelarobiorah" target="_blank">
            <Image
              src="/Assets/linkedin.svg"
              alt="LinkedIn Icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>

      {!isScrolled && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 z-50
          flex items-center justify-center
          
          py-[12px] px-[16px]"
          data-aos="fade-down"
        >
          <div
          className="flex items-center gap-[16px] text-[14px] font-[500]"
          data-aos="fade-left"
        >
          <a href="#home" className="p-[8px]">
            Home
          </a>
          <a href="#experience" className="p-[8px]">
            Experience
          </a>
          <a href="#projects" className="p-[8px]">
            Projects
          </a>
          <a href="https://www.linkedin.com/in/patrick-chukwudifu-908b901ab/" target="_blank">
            <Image
              src="/Assets/linkedin.svg"
              alt="GitHub Icon"
              width={28}
              height={28}
            />
          </a>
        </div>          
        </div>
      )}

      {isScrolled && (
        <div
          className="
          flex items-center justify-between
          border-t border-gray-200
          py-[12px] px-[16px]"
          data-aos="fade-up"
        >
          <p className="text-white font-[500] text-[16px]">
            Patrick Chimezie Chukwudifu
          </p>
           <a href="https://www.linkedin.com/in/patrick-chukwudifu-908b901ab/" target="_blank">
            <Image
              src="/Assets/linkedin.svg"
              alt="GitHub Icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
