import Image from "next/image";
import styles from "../styles/skills.module.scss";

const skills = [
    {
        name: "React",
        image: "/react_icon.svg"
    },
    {
        name: "Next.js",
        image: "/nextjs_icon.svg"
    },
    {
        name: "Typescript",
        image: "/typescript_icon.svg"
    },
    {
        name: "JavaScript",
        image: "/javascript_icon.svg"
    },
    {
        name: "HTML5",
        image: "/html5_icon.svg"
    },
    {
        name: "CSS",
        image: "/css_icon.svg"
    },
    {
        name: "Sass",
        image: "/sass_icon.svg"
    },
    {
        name: "Git",
        image: "/git_icon.svg"
    },
    {
        name: "Github",
        image: "/github_icon.svg"
    },
    {
        name: "Jest",
        image: "/jest_icon.svg"
    },
];

const Skills: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <span className={styles.gradient}>&lt;</span>
                Skills
                <span className={styles.gradient}>&gt;</span>
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.inner}>
                <div className={styles.border}>
                    {skills.map((skill, index) => (
                        <div className={styles.skills} key={index}>
                            <div className={styles.position}>
                                <div className={styles.item}>
                                    <div className={styles.image}>
                                        <Image
                                            src={skill.image}
                                            width={70}
                                            height={70}
                                            alt={skill.name}
                                        />
                                        <div className={styles.name}>
                                            <span>{skill.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;