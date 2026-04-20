import { useState } from "react";
import styles from "../styles/Contacts.module.css";
import BreadCrum from "../components/BreadCrum";
import Title from "../components/titles/Title";
import KhakiSection from "../components/Khaki/KhakiSection";
import { motion } from "framer-motion";

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <motion.section
            className={styles.contactsSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            {/* BREADCRUMB */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <BreadCrum text="Contacts" />
            </motion.div>

            {/* TITLE */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Title heading="Contacts" />
            </motion.div>

            <div className={styles.container}>
                <div className={styles.row}>

                    {/* LEFT */}
                    <motion.div
                        className={styles.left}
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>CONTACT ADDRESS</h2>

                        {[
                            { icon: "📍", title: "Military Force Headquarters", text: ["8901 Marmora Road, Glasgow", "D04 89GR, United Kingdom"] },
                            { icon: "📞", title: "Phone & Fax", text: ["Telephone: +1 800 123 1234", "Fax: +1 800 123 1234"] },
                            { icon: "✉️", title: "Email", text: ["mail@demosite.com", "info@militaryforce.com"] },
                            { icon: "🕐", title: "Working Hours", text: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"] }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.addressBox}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className={styles.addressIcon}>{item.icon}</div>
                                <div className={styles.addressText}>
                                    <h3>{item.title}</h3>
                                    {item.text.map((t, idx) => <p key={idx}>{t}</p>)}
                                </div>
                            </motion.div>
                        ))}

                        {/* MAP ERROR */}
                        <motion.div
                            className={styles.mapError}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className={styles.mapErrorIcon}>🗺️</div>
                            <div className={styles.mapErrorText}>
                                <p>Google Maps Platform rejected your request.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        className={styles.right}
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>CONTACT FORM</h2>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {["name", "email", "phone"].map((field, i) => (
                                <motion.div
                                    key={field}
                                    className={styles.formGroup}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <label>{field.toUpperCase()}*</label>
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                    />
                                </motion.div>
                            ))}

                            {/* TEXTAREA */}
                            <motion.div
                                className={styles.formGroup}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                ></textarea>
                            </motion.div>

                            {/* BUTTON */}
                            <motion.button
                                type="submit"
                                className={styles.submitBtn}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                SEND MESSAGE ➡
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>

            <KhakiSection />
        </motion.section>
    );
}