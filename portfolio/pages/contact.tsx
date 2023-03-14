import Section from "../components/Section/Section";
import ContactData from "../components/ContactData/ContactData";
import styles from "../styles/style.module.scss";

const Contact: React.FC = () => {
    return (
        <div className={styles.section}>
            <Section
                title="Contact"
                subtitle="If you would like to learn more about me or my work, 
                please feel free to contact me. I would be happy to answer 
                any questions." />
            <ContactData />
        </div>
    );
};

export default Contact;