import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <div className={styles.inner}>
                {children}
            </div>
            <Footer />
        </>
    )
}