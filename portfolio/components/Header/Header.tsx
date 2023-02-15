import Link from "next/link";
import { ImEmbed } from "react-icons/im";
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.position}>
                <div className={styles.logo}>
                    <Link href="/">
                        <ImEmbed size="3rem" color="#5f50fd" />
                    </Link>
                </div>
                <nav className={styles.menu}>
                    <ul className={styles.list}>
                        <li>
                            <Link href="/">
                                <span className={styles.navlink}>
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <span className={styles.navlink}>
                                    Projects
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/skills">
                                <span className={styles.navlink}>
                                    Skills
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className={styles.navlink}>
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className={styles.btn}>
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;