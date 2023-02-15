import Image from "next/image";
import styles from "../styles/about.module.scss";

const About: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <span className={styles.gradient}>&lt;</span>
                About
                <span className={styles.gradient}>&gt;</span>
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                convallis, diam vel faucibus volutpat.
            </div>
            <div className={styles.inner}>
                <div className={styles.position}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src=""
                            width={300}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;