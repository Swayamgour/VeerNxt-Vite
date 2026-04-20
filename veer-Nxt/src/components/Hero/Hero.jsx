import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    "https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/slide05.jpg",
    "https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/slide04.jpg",
    "https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/slide03.jpg",
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>

            {/* SLIDER */}
            <div className={styles.slider}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={slides[current]}
                        className={styles.slide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>

            {/* ARROWS */}
            <button className={styles.prev} onClick={prevSlide}>❮</button>
            <button className={styles.next} onClick={nextSlide}>❯</button>

            {/* OVERLAY */}
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* TEXT */}
            <motion.div
                className={styles.content}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                <motion.p
                    className={styles.heading}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <strong>
                        <em>THE COUNTRY</em> IS STRONG <br />
                        WITH A <em>STRONG ARMY</em>
                    </strong>
                </motion.p>

                <motion.p
                    className={styles.desc}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    In nec vulputate dui. Quisque accumsan nisl eros,
                    <br /> vel sagittis justo consequat in.
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <motion.button
                        className={styles.btn}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        JOIN NOW
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}