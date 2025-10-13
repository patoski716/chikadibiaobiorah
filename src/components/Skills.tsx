"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const specialties = [
    "Product Roadmap & Vision Alignment",
    "Product Backlog Prioritization",
    "Agile Software Methodologies(Scrum,Sprint Planning,Stand-ups,Retrospectives, & Iterative Launches Demos)",
    "Stakeholder Management",
    "Product KPI  Metric Tracking",
    "Funnel Analytics",
    "Conversion Rate Optimization",
    "Pain Point Identification & Resolution",
    "Monetization&Sales Strategy",
    "Growth Strategy & Market Expansion",
    
  ];

  const certifications = [
    "AITECHTech: DataAnalysis Professional Certificate",
    "Cousera: Google Project Management Associate",
    "Cousera: Business Analysis & Process Management",
    "Cousera: Automated Task & processes",
    "Udemy: Diploma Agile Management"
  ];

  return (
    <div className="mb-[100px] overflow-hidden" id="skills">
      <div className="space-y-[8px]" data-aos="fade-up">
        <p className="font-[500] text-[35px] md:text-[40px]">
          Skills and Tools
        </p>
        <p className="font-[500] text-[15px] md:text-[20px]">
          Explore my diverse skill set, a testament to my commitment to
          delivering excellence in Product Manager.
        </p>
      </div>

      <div className="mt-[24px] grid gap-[32px]">
        <div className="space-y-[20px]" data-aos="fade-right">
          <p className="font-[500] text-[24px]">Specialties</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px]">
            {specialties.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px]"
                data-aos="zoom-in"
              >
                <Image
                  src="/Assets/checkmark.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <p className="font-[400] text-[14px]  ">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-[20px]" data-aos="fade-left">
          <p className="font-[500] text-[24px]">Certifications</p>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-[8px]"
              data-aos="zoom-in"
            >
              <Image
                src="/Assets/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={24}
                loading="lazy"
              />
              <p className="font-[400] text-[14px] ">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
