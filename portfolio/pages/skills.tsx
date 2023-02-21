import SingleSkill from "../components/SingleSkill/SingleSkill";
import Section from "@/components/Section/Section";
import styles from "../styles/style.module.scss";

const skills = [
  {
    name: "React",
    icon: "/react_icon.svg",
  },
  {
    name: "Next.js",
    icon: "/nextjs_icon.svg",
  },
  {
    name: "Typescript",
    icon: "/typescript_icon.svg",
  },
  {
    name: "JavaScript",
    icon: "/javascript_icon.svg",
  },
  {
    name: "HTML5",
    icon: "/html5_icon.svg",
  },
  {
    name: "CSS",
    icon: "/css_icon.svg",
  },
  {
    name: "Sass",
    icon: "/sass_icon.svg",
  },
  {
    name: "Git",
    icon: "/git_icon.svg",
  },
  {
    name: "Github",
    icon: "/github_icon.svg",
  },
  {
    name: "Jest",
    icon: "/jest_icon.svg",
  },
];

const Skills = () => {
  return (
    <div className={styles.section}>
      <Section
        title="Skills"
        subtitle="Below you will find my skills in various Front-End technologies 
        and tools, including HTML, CSS, React, Next.js, SASS, and JEST. 
        With this knowledge and skillset, I am capable of creating dynamic, 
        responsive, and exceptionally user-friendly web solutions." />
      <div className={styles.inner}>
        <div className={styles.border}>
          {skills.map((skill, index) => (
            <SingleSkill key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;