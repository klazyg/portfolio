import styles from "./ContactData.module.scss";
import Link from "next/link";

const ContactData: React.FC = () => {
  return (
    <div className={styles.position}>
      <div className={styles.title}>
        <span className={styles.gradient}>E-mail:</span>
      </div>
      <a href="mailto:contact@klaudiazygmunt.com" target='_blank' rel="noopener noreferrer">
        <span className={styles.data}>contact@klaudiazygmunt.com</span>
      </a>
      <div className={styles.title}>
        <span className={styles.gradient}>Check my code:</span>
      </div>
      <Link href="https://github.com/klazyg" target="_blank" rel="noopener noreferrer">
        <span className={styles.data}>Github</span>
      </Link>
      <div className={styles.title}>
        <span className={styles.gradient}>Check my profile:</span>
      </div>
      <Link href="https://www.linkedin.com/in/klaudia-zygmunt/" target="_blank" rel="noopener noreferrer">
        <span className={styles.data}>LinkedIn</span>
      </Link>
    </div>
  )
}
export default ContactData;