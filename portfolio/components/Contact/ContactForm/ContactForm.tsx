import { useState } from 'react';
import ContactFormField from '../ContactFormField/ContactFormField';
import styles from "./ContactForm.module.scss";

type ContactFormProps = {};

const ContactForm: React.FC<ContactFormProps> = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Sending');
        const data = {
            name,
            email,
            message,
        };
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const response = await res.json();
            if (response.success) {
                setSubmitted(true);
                console.log('Message sent successfully!');
            } else {
                console.error('Error sending message:', response.error);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={styles.position}>
            {submitted ? (
                <p className={styles.text}>Your message has been sent successfully!
                    I will reply as soon as possible.</p>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <ContactFormField
                        label="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={setName}
                    />
                    <ContactFormField
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={setEmail}
                    />
                    <ContactFormField
                        label="Message"
                        type="textarea"
                        name="message"
                        value={message}
                        onChange={setMessage}
                    />
                    <div className={styles.btn_position}>
                        <button className={styles.btn} type="submit" value="Button">
                            Send
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;