"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    role: "Senior Product Manager | Picible",
    period: "May 2025 – Present (Remote, Fulltime)",
    details: [
      "Developed and executed growth strategies that expanded product adoption, improving retention by 20% and onboarding 1,000+ users within 4 months.",


      "Designed and launched new adoption channels (Bulk Purchase, Templates, Checkout Flow Optimization), reducing churn by 75% and driving 30%+ user engagement growth",


      "Conducted market research and competitive analysis to identify growth opportunities, refining product roadmap, and aligning with evolving customer needs.",

      "Collaborated with cross-functional teams and third-party partners to optimize adoption channels, ensuring seamless integration with existing processes.",


      "Collaborated with the marketing and sales team on the orchestration of GTM strategies, with marketing teams for monetization plans, BULK PURCHASE, driving targeted growth that acquired 1,000+ users, and reducing churn by 75% by catering to target partners at Picsible. Optimized product portfolio performance across adoption channels.",

    ],
  },
  {
    role: "IT Product Manager / Product Analyst | Defx360, United Kingdom",
    period: "January 2022 – Present (Remote, Contract)",
   
    details: [
      "Led cross-functional global remote teams across Engineering, QA, Design, and the head of products to deliver automated trading models in an Agile environment, ensuring 98% system uptime and seamless API integration with global broker platforms, served as the primary liaison to build and iterate new product features.",

      "Scaled an AI-powered trading solution (FxBot) from MVP to $1M ARR within 12 months by executing targeted growth and adoption strategies.Conducted compliance risk reviews and ensured regulatory alignment for financial product growth",

      "Applied predictive analytics and funnel insights to anticipate customer needs, driving a 30% boost in engagement and adoption rates.",

      "Conducted competitive intelligence and market research, refining product positioning and aligning with industry trends.",
    ],
  },
  
  {
    role: "Product Manager | Beyond Tech, Nigeria",
    period: "January 2025 – June 2025 (Remote, Contract)",
    
    details: [
      "Strategically led the end-to-end product life cycle and designed the UX/UI for Work&Shop, a platform connecting users to service providers. Additionally, I led the redesign of the Ecomarine Group corporate website, improving its user experience and professional appeal, which directly contributed to a 25% increase in client inquiries within the first three months of launch.",

      "Spearheaded user research that informed design iterations, leading to a 25% increase in task completion and a 40% reduction in drop-off during onboarding.",

      "Designed interactive wireframes and high-fidelity prototypes using Figma, which cut design iteration cycles by 35% and accelerated stakeholder alignment.",
      
      "Created detailed user flows, design specs, and style guides, streamlining developer handoff and ensuring 95% design-to-dev accuracy."
    ],
  },
  {
    role: "Business Analyst / Product Manager  | FCT-High Court, Nigeria",
    period: "January 2021 – December 2024 (Hybrid, Fulltime)",
    
    details: [
      "Investigated ₦500M+ annual affidavit fraud and designed scalable SaaS/GovTech solutions with compliance protocols mimicking financial grade, RPA Logic enhancing data security, operational efficiency, Compliance risk assessments/audits, and user accessibility across judiciary platforms, reducing service delivery time.",

      "Managed a cross-functional team (UX designers & engineers, developers to digitize affidavits, to implement KYC protocols and compliance that reduced fund misappropriation by 35%, optimized budget allocation, and streamlined processing time by 40% within 2 months.",

      "Ensured software products met high-quality standards by executing rigorous functional, performance, and security testing across judicial systems, helping maintain system integrity, data confidentiality, and compliance with public sector technology protocols.",

      "Mentored junior staff and cross-functional team members to build capacity, align with project goals, and achieve individual and team performance objectives, fostering a culture of continuous improvement and accountability within the judicial tech transformation program."
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="mb-[100px] overflow-hidden" id="experience">
      <div className="space-y-[8px]" data-aos="fade-up">
        <p className="font-[500] text-[35px] md:text-[40px]">Experience</p>
        <p className="font-[500] text-[15px] md:text-[20px]">
          Navigating my professional journey, one role at a time
        </p>
      </div>

      <div className="mt-[32px] space-y-[16px]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#48484A] dark:bg-[#48484A] rounded-[8px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <button
  onClick={() => toggleIndex(index)}
  className={`w-full flex justify-between items-center py-[16px] px-[16px] 
    ${openIndex === index ? "border-b border-[#D9D9D9]" : ""} 
    focus:outline-none cursor-pointer`}
>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
    {/* Left: Role */}
    <p className="font-[700] text-[18px] md:text-[20px] text-left">
      {exp.role}
    </p>
    
    {/* Right: Period */}
    <p className="font-[400] text-[14px] md:text-[16px] text-gray-300">
      {exp.period}
    </p>
  </div>

  {openIndex === index ? (
    <FaChevronUp className="text-[#000000] text-white text-[18px] ml-4" />
  ) : (
    <FaChevronDown className=" text-[#000000] text-white text-[18px] ml-4" />
  )}
</button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              
              <div className="py-[16px] px-[16px] text-[14px] md:text-[16px] font-[400] space-y-[8px]">
                {exp.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
