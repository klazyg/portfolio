import styles from "./ContactFormField.module.scss";

type ContactFormFieldProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
};

const ContactFormField: React.FC<ContactFormFieldProps> = ({
    label,
    type,
    name,
    value,
    onChange,
}) => {
    const isTextarea = type === 'textarea';

    return (
        <div className={styles.inputGroup}>
            <label className={styles.name} htmlFor={name}>
                {label}: *
            </label>
            {isTextarea ? (
                <textarea
                    className={styles.inputField_message}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    className={styles.inputField}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    )
}

export default ContactFormField;