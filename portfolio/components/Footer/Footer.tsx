import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.position}>
      <span className={styles.text}>© {new Date().getFullYear()} Klaudia Zygmunt</span>
    </div>
  );
};

export default Footer;