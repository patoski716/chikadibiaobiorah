"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="mb-10 overflow-hidden" id="home">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12">
        <div className="flex-shrink-0 mx-auto md:mx-0" data-aos="fade-right">
          <div
            className="
              max-h-[350px] max-w-[350px] 
              border-4 border-[#1e1e1e] shadow-lg overflow-hidden
              rounded-none md:rounded-full
              bg-gradient-to-r from-blue-500 to-purple-500
            "
          >
            <Image
              src="/Assets/chika.jpeg"
              alt="Profile Picture - Mobile"
              width={350}
              height={350}
              loading="lazy"
              priority={false}
              className="object-cover w-full h-full block md:hidden"
            />

            <Image
              src="/Assets/chika.jpeg"
              alt="Profile Picture - Desktop"
              width={350}
              height={350}
              loading="lazy"
              priority={false}
              className="object-cover w-screen h-full hidden md:block object-top -translate-y-3"
            />
          </div>
        </div>

        <div
          className="max-w-[700px] text-center md:text-left space-y-4"
          data-aos="fade-left"
        >
          <p className="font-medium text-[20px] md:text-[24px]">
            I&apos;m Chikadibia Obiorah
          </p>
          <h1 className="font-bold text-[32px] md:text-[40px] leading-tight">
            Product Manager
          </h1>
          <p className="font-normal text-[14px] md:text-[16px] text-justify md:text-left ">
            I manage and deliver user-centered digital products that align business objectives with customer needs. With over 5 years of experience in product and project management, I oversee the full product lifecycle—from ideation to launch—across industries like SaaS, FinTech, EduTech, and AI. Skilled in agile development, cross-functional collaboration, and data-driven decision-making, I lead teams to build impactful products that drive growth, efficiency, and user satisfaction. Beyond tech, I volunteer as a Legal PM and contribute to rural development projects, fueled by a passion for solving meaningful challenges.
          </p>
          <a
            href="https://docs.google.com/document/d/1UgZjyVeOVVHipxV6DaaUc7ov-zt448V8R8e8bJTB-pc/edit?usp=drivesdk"
            
            target="_blank"
          >
            <div
              className="p-[10px] rounded-[8px]  bg-[#FFFFFF] inline-flex items-center justify-center gap-2 cursor-pointer  transition-colors duration-200"
              data-aos="zoom-in"
            >
              <p className="font-[500] text-[16px] text-[#48484A]">
                View My Resume
              </p>
              <Image
                src="/Assets/link-square-02.svg"
                alt="Resume Link"
                width={24}
                height={24}
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
