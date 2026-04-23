import styles from "./Footer.module.css";
import { FaCircleArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png"


export default function Footer() {
    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >

            {/* TOP BAR */}
            <div className={styles.topBar}>
                <motion.div
                    className={styles.logo}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={logo} alt="logo" />
                </motion.div>

                <motion.div
                    className={styles.backToTop}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                        }}
                    >
                        <FaCircleArrowUp style={{ fontSize: "20px" }} />
                    </motion.span>
                    BACK TO TOP
                </motion.div>
            </div>

            {/* MAIN */}
            <div className={styles.main}>

                {/* MENU */}
                <motion.ul
                    className={styles.menu}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                >
                    {["HOME", "ABOUT", "INFORMATION", "BLOG", "GALLERY", "CONTACTS"].map((item, i) => (
                        <motion.li
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ x: 5, color: "#c0392b" }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* RIGHT CONTENT */}
                <motion.div
                    className={styles.right}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {/* LOCATION */}
                    <motion.div
                        className={styles.column}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h3>LOCATION</h3>
                        <p>
                            8901 Marmora Road,<br />
                            Glasgow, D04 89GR.<br />
                            <span className={styles.link}>📍 Map</span>
                        </p>
                    </motion.div>

                    {/* CONTACTS */}
                    <motion.div
                        className={styles.column}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h3>CONTACTS</h3>
                        <p>
                            Telephone: +1 800 123 1234<br />
                            Fax: +1 800 123 1234<br />
                            E-mail: mail@demosite.com
                        </p>
                    </motion.div>

                    {/* SOCIAL */}
                    <motion.div
                        className={styles.column}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h3>FOLLOW US</h3>

                        <div className={styles.social}>
                            {["fb", "ig", "li", "tw", "yt"].map((s, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    {s}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* COPYRIGHT */}
            <motion.div
                className={styles.copy}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Copyright © 2026. Military Force. All rights reserved.
            </motion.div>
        </motion.footer>
    );
}