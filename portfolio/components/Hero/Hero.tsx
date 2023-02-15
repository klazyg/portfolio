import Link from 'next/link';
import styles from "./Hero.module.scss";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.position}>
                <div className={styles.main}>
                    <div className={styles.title}>
                        <Typewriter
                            words={["Hello, I am Klaudia!"]}
                            loop={20}
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </div>
                    <div className={styles.subtitle}>
                        <span className={styles.subtitle_text}>
                            Front-End Developer
                        </span>
                    </div>
                    <div className={styles.position_text}>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus convallis, diam vel faucibus
                            volutpat Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. But I must
                            explain to you how all this mistaken idea.
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
                    <Link href="https://google.com" target="_blank">
                        <AiFillMail
                            className={styles.icon}
                            size={90}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;