import { useState, useEffect } from 'react';
import Section from '@/components/Section/Section';
import ProjectList from '@/components/Project/ProjectList/ProjectList';
import styles from '../styles/style.module.scss'

const projects = [
  {
    name: "Budget App",
    description: "My Budget App allows users to add different types of transactions with a simple form. Thanks to the clear layout, users can easily monitor their expenses, savings and income, while the graph and summaries help to quickly understand their finances.",
    linkGithub: 'https://github.com/klazyg/Budget-App',
    linkDemo: '/',
    image: "/budgetapp_website.png"
  },
  {
    name: "Portfolio",
    description: "I used Next.js technology and implemented various effects and hooks to increase interactivity on my Portfolio page. Thanks to a simple and clear interface, visitors can easily learn about my projects and skills, which allows for a more complete understanding of my profile as a Front-End Developer. To ensure that the page is displayed perfectly on different devices, I paid special attention to responsiveness.",
    linkGithub: 'https://github.com/klazyg/portfolio/tree/main/portfolio',
    linkDemo: 'https://klaudiazygmunt.vercel.app/',
    image: "/portfolio_website.png"
  },
  {
    name: "To Do List",
    description: "To Do List is a simple yet useful application that allows users to add, delete and edit tasks in an intuitive way. It's easy to create a to-do list, then track progress and mark tasks as done. Thanks to this tool, you can manage your time and duties more effectively.",
    linkGithub: 'https://github.com/klazyg/ToDo-List-App',
    linkDemo: '/',
    image: "/portfolio_website.png"
  },
  {
    name: "Weather App",
    description: "Weather App is a web application that uses a weather API to display weather data for any entered location. Users can see the current temperature, real feel, humidity, wind speed, as well as the highest and lowest temperatures. The app provides a simple and convenient way for users to check the weather conditions in any location.",
    linkGithub: 'https://github.com/klazyg/weather-app',
    linkDemo: 'https://weather-app-portfolio.vercel.app/',
    image: "/weatherapp_website.png"
  },
];

const Projects = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className={styles.section}>
      <Section
        title="Projects"
        subtitle="I invite you to familiarize yourself with my latest projects 
        that I have recently worked on, using various technologies and tools. 
        Here you will find different kinds of projects, including websites, 
        web applications, and interactive components." />
      {isClient && (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}

export default Projects;