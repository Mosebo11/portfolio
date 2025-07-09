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
      {/* Company Experience */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Collector"
            subTitle="Medical Care and Development International (MCDI), 2018 - 2019"
            result="Report Completed"
            des="Collected data from patients at Ts’akholo Health Centre, analyzed results using Excel, and submitted reports for medical service improvement."
          />
          <ResumeCard
            title="Peer Educator & Data Collector"
            subTitle="LENASO (Lesotho Network of AIDs Service Organization), 2023 - 2024"
            result="Community Impact"
            des="Educated communities about HIV/AIDS, recorded participant data, and submitted reports to Mafeteng Hospital."
          />
          <ResumeCard
            title="System Administrator & Data Engineer"
            subTitle="Iconic FootPrints Association, 2023 - 2024"
            result="Secured System"
            des="Managed networks and analyzed data to generate actionable reports and insights for the organization."
          />
        </div>
      </div>

      {/* Job Experience */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Invigilator"
            subTitle="Motsekuoa High School, 2023"
            result="Successfully Managed Exams"
            des="Oversaw examination sessions, enforced ECOL rules, handled student registration, and submitted daily reports to school administration."
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
