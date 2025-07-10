import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiPython,
  SiTensorflow,
  SiTableau,
} from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
      <br/>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4 flex-wrap">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiPython />
          </span>
          <span className="bannerIcon">
            <SiTensorflow />
          </span>
          <span className="bannerIcon">
            <SiTableau />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
