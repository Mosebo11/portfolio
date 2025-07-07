import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Clone"
          des="A responsive social media platform clone allowing users to post updates, like, comment, and interact in real time with a clean, intuitive interface."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An e-commerce platform with product listings, shopping cart, checkout functionality, and payment gateway integration to simulate real online shopping."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="A real-time chat application using Firebase for authentication and message storage, enabling seamless one-to-one and group chats."
          src={projectThree}
        />
        <ProjectsCard
          title="Task Management Tool"
          des="A Trello-inspired task management app allowing users to create boards, add tasks, drag-and-drop to manage workflow efficiently."
          src={projectThree}
        />
        <ProjectsCard
          title="Portfolio Website"
          des="A personal portfolio website showcasing projects, skills, and contact information, designed to highlight developer and design capabilities."
          src={projectOne}
        />
        <ProjectsCard
          title="Weather Forecast App"
          des="A weather app fetching live weather data using OpenWeather API, displaying temperature, humidity, and forecast for multiple cities."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects
