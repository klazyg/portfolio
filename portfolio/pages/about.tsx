import Section from "@/components/Section/Section";
import AboutDescription from "@/components/AboutDescription/AboutDescription";
import styles from "../styles/style.module.scss";

const About: React.FC = () => {
    return (
        <div className={styles.section}>
            <Section
                title="About"
                subtitle="Below you will find some information about me." />
            <div className={styles.inner}>
                <AboutDescription />
            </div>
        </div>
    );
}

export default About;