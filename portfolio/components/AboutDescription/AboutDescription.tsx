import Image from "next/image";
import styles from "./AboutDescription.module.scss";

const AboutDescription: React.FC = () => {
    return (
        <div className={styles.position}>
            <div className={styles.image_mobile}>
                <Image
                    src="/jest_icon.svg"
                    width={250}
                    height={200}
                    alt=""
                />
            </div>
            <div className={styles.description}>
                <p>As a Front-End Developer, my passion is coding, problem-solving, and software design.
                    I focus on utilizing the latest technologies and innovative solutions to create
                    elegant and creative projects. I am distinguished by my analytical thinking and
                    ability to take an unconventional approach to challenges. I am capable of multitasking,
                    and my goal is always to complete projects on time.</p>
                <p>I enjoy working in a team because it allows me to share my knowledge and
                    experience and learn from others. Gaining knowledge from more experienced colleagues
                    is incredibly inspiring and helps me work more efficiently.</p>
                <p>Before transitioning to Front-End Development, I worked as a Project Manager, including in
                    an online store and a cryptocurrency project (browser game, Web 3.0). Due to my desire
                    to learn, I took on additional tasks in the company as a Front-End Developer to support
                    the project and help develop it as quickly as possible. I was able to achieve this goal.</p>
                <p>Outside of work, I have been interested in cryptocurrencies, geopolitics, and new technologies
                    that help me develop professionally for several years. I love to travel, especially to Balkan
                    countries, where I can see the beauty of the country without human interference and get
                    to know local people. Cooking various dishes from around the world is a source of joy
                    and relaxation for me.</p>
            </div>
            <div className={styles.image}>
                <Image
                    src="/jest_icon.svg"
                    width={300}
                    height={450}
                    alt=""
                />
            </div>
        </div>
    );
};

export default AboutDescription;