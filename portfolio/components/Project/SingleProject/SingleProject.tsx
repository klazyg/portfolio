import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import styles from "./SingleProject.module.scss";

interface SingleProjectProps {
    index: number;
    name: string;
    description: string;
    image: string;
    linkDemo: string;
    linkGithub: string;
}

const SingleProject = ({ index, name, description, image, linkDemo, linkGithub }: SingleProjectProps) => {
    return (
        <Link href={linkDemo} target="_blank" rel="noopener noreferrer">
            <div className={styles.portfolio}>
                <div className={styles.project}>
                    <div className={styles.number}>
                        <span>{index + 1}.</span>
                    </div>
                    <div className={styles.name}>
                        <span className={styles.gradient}>
                            {name}
                        </span>
                    </div>
                    <div className={styles.image__position_mobile}>
                        <div className={styles.image_mobile}>
                            <Image
                                src={image}
                                width={250}
                                height={150}
                                alt={name}
                            />
                        </div>
                    </div>
                    <div className={styles.description}>
                        <span>
                            {description}
                        </span>
                    </div>
                    <div className={styles.icon__position}>
                        <Link href={linkGithub} target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}>
                                <AiOutlineLink size="2rem" />
                                <div className={styles.text}>
                                    <b>GitHub Repo</b>
                                </div>
                            </div>
                        </Link>
                        <div className={styles.btn}>
                            <Link href={linkDemo} target="_blank" rel="noopener noreferrer">
                                <b>View demo</b>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.image__position}>
                    <div className={styles.image}>
                        <Image
                            src={image}
                            width={450}
                            height={350}
                            alt={name}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleProject;