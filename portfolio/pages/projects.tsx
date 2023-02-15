import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import styles from "../styles/projects.module.scss";

const projects = [
  {
    number: "1.",
    name: "Budget App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    linkGithub: 'https://github.com/klazyg/Budget-App',
    linkDemo: '/',
    image: "/jest_icon.svg"
  },
  {
    number: "2.",
    name: "Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    linkGithub: 'https://github.com/klazyg/portfolio/tree/main/portfolio',
    linkDemo: '/',
    image: "/jest_icon.svg"
  },
  {
    number: "3.",
    name: "To Do List",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    linkGithub: 'https://github.com/klazyg/ToDo-List-App',
    linkDemo: '/',
    image: "/jest_icon.svg"
  },
  {
    number: "4.",
    name: "Weather App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    linkGithub: 'https://github.com/klazyg/weather-app',
    linkDemo: '/',
    image: "/jest_icon.svg"
  },
];


const Projects: React.FC = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <span className={styles.gradient}>&lt;</span>
        Projects
        <span className={styles.gradient}>&gt;</span>
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      {isClient && projects.map((project, index) => (
        <div className={`${styles.position} ${index === projects.length - 1 ? styles.last : ""}`}
          key={index}>
          <div className={styles.inner}>
            <Link href={project.linkDemo} target="_blank" rel="noopener noreferrer">
              <div className={styles.portfolio}>
                <div className={styles.project}>
                  <div className={styles.number}>
                    <span>{project.number}</span>
                  </div>
                  <div className={styles.name}>
                    <span className={styles.gradient}>
                      {project.name}
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span>
                      {project.description}
                    </span>
                  </div>
                  <div className={styles.icon__position}>
                    <Link href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                      <div className={styles.icon}>
                        <AiOutlineLink size="2rem" />
                        <div className={styles.link}>
                          <b>GitHub Repo</b>
                        </div>
                      </div>
                    </Link>
                    <div className={styles.btn}>
                      <Link href={project.linkDemo} target="_blank" rel="noopener noreferrer">
                        <span>View demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.image__position}>
                  <div className={styles.image}>
                    <Image
                      src={project.image}
                      width={450}
                      height={350}
                      alt={project.name}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {index !== projects.length - 1 && <div className={styles.border}></div>}
        </div>
      ))}
    </div>
  );
}

export default Projects;