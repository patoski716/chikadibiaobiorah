import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      name: "Picsible",
      description:
        "Picsible is a Nigerian startup that provides a technology-driven platform for framing photos, allowing customers to order custom picture frames online or in their studio. The company combines a user-friendly website for photo framing with a physical studio in Lagos, aiming to help people preserve memories. It offers online ordering for delivery within Nigeria and emphasizes the quality of its frames, which feature durable acrylic glass. ",
      // tech: ["Next Js", "Typescript", "Tailwindcss", "Material UI", "Redux"],
      image: "/Assets/Picsible.png",
      link: "https://www.picsible.com/",
      reverse: true,
    },
    {
      name: "WorkandShop",
      description:
        "Work and Shop is a platform that connects users with skilled artisans, professionals, companies, and businesses for various service needs. It allows users to hire handymen, technicians, and other service providers while also offering a marketplace to shop for essential items, work materials, and tools. The platform streamlines the process of finding reliable professionals and purchasing necessary supplies, making it a comprehensive hub for both services and shopping.",
      // tech: ["Figma", "Trello", "Googlework Space", "Chat GPT"],
      image: "/Assets/workshop.png",
      link: "https://www.workandshopapp.com/",
      reverse: false,
    },
    {
      name: "Khemshield",
      description:
        "Khemshield is a trusted provider of secure IT solutions and professional development. Specializing in web and mobile application security, cybersecurity consulting, and infrastructure protection, Khemshield helps businesses safeguard their digital assets. With a team of experienced IT professionals, the company is dedicated to innovation and security, ensuring robust protection against cyber threats. Additionally, Khemshield is committed to empowering the next generation of IT experts through expert training and mentorship programs.",
      // tech: ["Next Js", "Typescript", "Tailwindcss", "Material UI", "Redux"],
      image: "/Assets/khemshield.png",
      link: "https://www.khemshield.com/",
      reverse: true,
    },
    {
      name: "Fixam",
      description:
        "Fixam Africa is a one-stop eCommerce marketplace for building materials and electronics, providing a seamless shopping experience for individuals and businesses. The platform connects buyers with trusted suppliers, offering a wide range of high-quality products, from construction essentials to the latest electronic devices. With an intuitive interface, secure payment options, and reliable delivery services, Fixam Africa simplifies procurement, ensuring convenience and efficiency for customers across the region.",
      // tech: ["Next Js", "Typescript", "Tailwindcss", "Material UI", "Redux"],
      image: "/Assets/fixam.png",
      link: "https://fixam-client-dev-lmlot.ondigitalocean.app/",
      reverse: false,
    },
    {
      name: "Powerkit",
      description:
        "PowerKit is your all-in-one solution for managing everyday transactions effortlessly. From mobile recharges and data purchases to travel bookings and utility payments, PowerKit streamlines your digital experience. Whether you need to buy airtime, pay electricity bills, subscribe to cable TV, send bulk SMS, or book tickets for events and travel, PowerKit offers a seamless and secure platform. With additional services like e-SIM activation and exam registration (JAMB & WAEC), PowerKit ensures convenience at your fingertips.",
      // tech: ["Next Js", "Typescript", "Tailwindcss", "Material UI", "Redux"],
      image: "/Assets/powerkit.png",
      link: "https://powerkit.ng/",
      reverse: true,
    },
  ];

  return (
    <div className="mb-[100px] overflow-hidden" id="projects">
      <div className="space-y-[8px]" data-aos="fade-up">
        <p className="font-[500] text-[35px] md:text-[40px]">Projects</p>
        <p className="font-[500] text-[15px] md:text-[20px]">
          Explore Some of the Projects I Have Worked On.
        </p>
      </div>

      <div className="mt-[32px] space-y-[48px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid place-items-center lg:flex items-center lg:justify-between gap-[32px] ${
              project.reverse ? "lg:flex-row-reverse" : ""
            }`}
            data-aos={project.reverse ? "fade-left" : "fade-right"}
          >
            <div
              className="max-w-[700px] text-center md:text-left space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="font-medium text-[20px] md:text-[24px]">
                {project.name}
              </p>
              
              <p className="font-normal text-[14px] md:text-[16px] text-justify md:text-left ">
                {project.description}
              </p>

              

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[10px] rounded-[8px] bg-[#FFFFFF] inline-flex items-center justify-center gap-2 cursor-pointer  duration-200"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <p className="font-[500] text-[16px] text-[#48484A]">
                  Visit live link
                </p>
                <Image
                  src="/Assets/link-square-02.svg"
                  alt="Project Link"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </a>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
              <Image
                src={project.image}
                alt={`${project.name} Project Image`}
                width={400}
                height={300}
                className="rounded-[8px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
