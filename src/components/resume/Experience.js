import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 20XX</p>
          
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Impact & Holbaton School"
            subTitle="ICT Officer and Instructor- (2025/Jan - Present)"
            result="Maseru, Machache"
            des="As an ICT Officer and instructor at Impact School and Holberton School, I support and guide learners in developing practical technology skills. I am committed to empowering students with industry-relevant knowledge in software development and AI to prepare them for impactful careers.
"
          />
          <ResumeCard
            title="Online Web Developer"
            subTitle="Mobile and Web Developer - (2020 - Present)"
            result="Online"
            des="I work remotely as a mobile and web developer, building responsive, user-friendly applications for clients globally. My focus is on delivering clean, functional designs that meet client needs while continuously improving my skills in modern development frameworks.
"
          />
          <ResumeCard
            title="ICT and Data Analist"
            subTitle="Iconic Footprints Association and LENASO- (2018 - 2022)"
            result="Mafeteng, Motsekuoa Lesotho"
            des="My task at LENASO was to educate people about
HIV/AIDs at community gathering, church, schools and
keep the record of people registered then submit to
Mafeteng Hospital Officer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
