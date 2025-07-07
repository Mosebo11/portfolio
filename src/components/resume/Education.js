import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Limkokwing University of Creative Technology "
            subTitle="BSc (Hon) in Software Engineering--(2019 - 2023)"
            result="3.1/4"
            des="Limkokwing University of Creative Technology is a Malaysia-based international university known for its focus on creativity, innovation, and industry-driven education. It offers programs in design, technology, and business, aiming to produce graduates ready for the global creative and digital economy.
"
          />
          <ResumeCard
            title="Samsung Innovation Campus @LP"
            subTitle={
             <>
                Python Coding and Programming--(2024: April - October)
            <br />
                Artificial Intelligence--(2025: April - October)
            </>
           }
            result="Certified"
            des="Samsung Innovation Campus is a global Samsung program providing practical education in coding, programming, and AI to empower youth with future-ready tech skills. It aims to bridge the digital skills gap, enabling participants to improve employability and contribute to their local economies.
"
          />
          <ResumeCard
            title="Motsekuoa High and Primary School"
            subTitle={
         <>
          <b>MOTSEKUOA HIGH SCHOOL</b>
        <br />
          LGCSE Second-Class--(2016-2018)
        <br />
          JC - Second-Class--(2013-2015)
        <br />
        <b>MOTSEKUOA RCC PRIMARY SCHOOL</b>
        <br />
            Std 7 - Third-Class--(2006-2012)
        </>
        }

            result="Passed"
            des="Motsekuoa High School and Motsekuoa RCC Primary School are community-centered schools in Lesotho dedicated to providing **inclusive and quality education for all learners**. They nurture students with strong academic foundations and life skills, empowering them to pursue further education and contribute positively to their communities.
"
          />
        </div>
        
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education