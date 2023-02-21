import styles from "./Section.module.scss";

type SectionProps = {
  title: string;
  subtitle: string;
};

const Section: React.FC<SectionProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.title}>
        <span className={styles.gradient}>&lt;</span>
        {title}
        <span className={styles.gradient}>&gt;</span>
      </div>
      <div className={styles.subtitle}>
        {subtitle}
      </div>
    </>
  );
};

export default Section;