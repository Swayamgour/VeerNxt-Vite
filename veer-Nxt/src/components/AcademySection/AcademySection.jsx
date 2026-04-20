import styles from "./AcademySection.module.css";
import { motion } from "framer-motion";

export default function AcademySection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT */}
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>WELCOME TO ACADEMY</h2>

                    <motion.div
                        className={styles.imageBox}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/yay-1291291-300x200.jpg"
                            alt="academy"
                        />
                    </motion.div>

                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <motion.button
                        className={styles.btn}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        more
                    </motion.button>
                </motion.div>

                {/* MIDDLE */}
                <motion.div
                    className={styles.middle}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3>NEWS & EVENTS</h3>

                    {[
                        "Developing discipline",
                        "In hac habitasse platea dictumst nunc ornare ipsum libero",
                        "Nunc eu dignissim sem ac volutpat leo",
                    ].map((title, i) => (
                        <motion.div
                            key={i}
                            className={styles.newsItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h5>{title}</h5>
                            <span>27-28 April, 2015</span>

                            {i !== 2 && <div className={styles.divider}></div>}
                        </motion.div>
                    ))}

                    <a href="#" className={styles.archive}>
                        NEWS ARCHIVE →
                    </a>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>WHY CHOOSE US</h2>

                    <ul className={styles.list}>
                        {[
                            "Quick Education",
                            "Professional Team",
                            "Latest Technologies",
                            "Military Career",
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ x: 10 }}
                            >
                                <span>{i + 1}</span>
                                <div>
                                    <h4>{item}</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}