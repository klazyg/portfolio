import Link from "next/link";
import { ImEmbed } from "react-icons/im";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.section}>
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
                <div className={styles.mode}>
                    <MdDarkMode className={styles.moon} size="3rem" color="#5f50fd" />
                    <MdLightMode className={styles.sun} size="3rem" color="#ffac26" />
                </div>
            </div>
        </header>
    );
}

export default Header;