import Link from 'next/link';
import styles from "./Hero.module.scss";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Hero: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.position}>
                <div className={styles.main}>
                    <div className={styles.title}>
                        <span className={styles.title_text}>
                            Hello, I am Klaudia!
                        </span>
                    </div>
                    <div className={styles.subtitle}>
                        <span className={styles.subtitle_text}>
                            Front-End Developer
                        </span>
                    </div>
                    <div className={styles.position_text}>
                        <div className={styles.text}>
                            My skills focus on React and Next.js technologies which allow me to create
                            innovative projects. My goal is to write clean and effective code and develop my skills
                            I enjoy solving problems. Thanks to my previous experience as a Project Manager,
                            I am organized and focused on delivering the project.
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <Link href="https://github.com/klazyg" target="_blank">
                        <AiFillGithub
                            className={styles.icon}
                            size={90}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/klaudia-zygmunt/" target="_blank">
                        <AiFillLinkedin
                            className={styles.icon}
                            size={90}
                        />
                    </Link>
                    <a href="mailto:contact@klaudiazygmunt.com" target='_blank'>
                        <AiFillMail
                            className={styles.icon}
                            size={90}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;