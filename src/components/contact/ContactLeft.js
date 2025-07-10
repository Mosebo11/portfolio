import React from 'react'
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ts'epe Mosebo</h3>
        <p className="text-lg font-normal text-gray-400">
        Software and AI Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a software and AI engineer, I design and build intelligent systems that solve real-world problems efficiently. I am passionate about leveraging technology to create impactful, scalable solutions that improve lives and drive innovation.

        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+266 5998 1177</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mosebots11@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/ke.lokisa.lifono?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/26659981177"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/tsepe-mosebo"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
