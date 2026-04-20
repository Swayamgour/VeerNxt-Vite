import BreadCrum from "../components/BreadCrum";
import KhakiSection from "../components/Khaki/KhakiSection";
import Title from "../components/titles/Title";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className={styles.aboutPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            {/* BREADCRUMB */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <BreadCrum text={"About Military Force"} />
            </motion.div>

            {/* TITLE */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Title heading={"About Military Force"} />
            </motion.div>

            {/* CONTENT */}
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    WELCOME TO ACADEMY
                </motion.h2>

                <div className={styles.content}>

                    {/* IMAGE */}
                    <motion.div
                        className={styles.imageBox}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src="https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/yay-623655.jpg"
                            alt="academy"
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        className={styles.text}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Proin pharetra dictum sapien, vitae mollis leo vehicula sit amet.
                            Duis ac nisi nulla. Sed consequat, neque quis laoreet iaculis,
                            nisl urna lobortis libero, sit amet molestie nibh purus id nisl.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Sed in bibendum ipsum, vel sollicitudin nibh. Nam in dapibus magna.
                            Etiam consectetur lobortis ipsum, sed auctor erat pellentesque quis.
                        </motion.p>

                        <motion.button
                            className={styles.btn}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            more
                        </motion.button>
                    </motion.div>

                </div>
            </div>

            {/* NEXT SECTION */}
            <KhakiSection />

        </motion.div>
    );
}