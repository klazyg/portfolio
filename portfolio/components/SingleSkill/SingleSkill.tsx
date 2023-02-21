import Image from "next/image";
import styles from "./SingleSkill.module.scss";

interface SingleSkillProps {
    name: string;
    icon: string;
}

const SingleSkill = ({ name, icon }: SingleSkillProps) => {
    return (
        <div className={styles.skills}>
            <div className={styles.position}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.icon_mobile}>
                            <Image src={icon} width={45} height={45} alt={name} />
                        </div>
                        <div className={styles.icon}>
                            <Image src={icon} width={70} height={70} alt={name} />
                        </div>
                        <div className={styles.name}>
                            <span>{name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSkill;