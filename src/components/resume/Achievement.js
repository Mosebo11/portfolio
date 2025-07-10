import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      
      {/* Achievements */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Founder"
            subTitle="__init__ technologies, 2024"
            result="Successfully Information Technology Company"
            des="__init__ Technologies is a brilliant reflection of innovation from the ground up—its name alone speaks to starting something powerful and foundational. A bold step into tech, driven by vision and code."
          />
          <ResumeCard
            title="Software Engineering Graduate"
            subTitle="Limkokwing University, 2019 - 2023"
            result="BSc (Hons) Degree"
            des="Graduated with honors in Software Engineering with Multimedia, acquiring skills in web development, algorithms, data structures, and more."
          />
          <ResumeCard
            title="Certified Python Programmer"
            subTitle="Lerotholi Polytechnic (Samsung Innovation Campus), 2024"
            result="Certification Achieved"
            des="Completed training in Python programming, gaining proficiency in backend logic, data handling, and software development principles."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
