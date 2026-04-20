import styles from "./KhakiSection.module.css";
import { motion } from "framer-motion";

export default function KhakiSection() {
    return (
        <section className={styles.wrapper}>

            {/* LEFT */}
            <motion.div
                className={styles.left}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>How to start your military education</h2>
                <p>
                    Sed gravida lobortis congue. Praesent ultricies orci ut enim
                    pellentesque aliquam. Proin viverra lorem nisi, eu mollis ipsum
                    elementum nec.
                </p>
            </motion.div>

            {/* CENTER ICON */}
            <motion.div
                className={styles.center}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img
                    src="https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/logo-khaki.png"
                    alt="logo"
                />
            </motion.div>

            {/* RIGHT */}
            <motion.div
                className={styles.right}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Becoming a Military Officer</h2>
                <p>
                    Praesent ultricies orci ut enim pellentesque aliquam. Proin viverra
                    lorem nisi, eu mollis ipsum elementum nec.
                </p>
            </motion.div>

        </section>
    );
}