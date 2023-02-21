import { useState, useEffect } from "react";
import Link from "next/link";
import styles from './Header.module.scss';
import Hamburger from "hamburger-react";
import { ImEmbed } from "react-icons/im";

const Header: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 992);
            setOpen(false);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <header className={styles.section}>
            <div className={styles.position}>
                <div className={styles.logo}>
                    <Link href="/">
                        <ImEmbed size="3rem" color="#5f50fd" />
                    </Link>
                </div>
                {isSmallScreen ? (
                    <Hamburger
                        toggled={isOpen}
                        toggle={handleClick}
                        label="Show menu"
                    />
                ) : (
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
                )}
                {isOpen && isSmallScreen && (
                    <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
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
                )}
            </div>
        </header>
    );
}

export default Header;