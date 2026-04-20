import { useState, useEffect } from "react";
import { data } from "../data";
import styles from "./Features.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MilitarySection() {
    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setCardsToShow(1);
            else if (window.innerWidth < 1024) setCardsToShow(2);
            else setCardsToShow(3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        if (index < data.length - cardsToShow) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>

            <div className={styles.container}>

                {/* HEADING ANIMATION */}
                <motion.h1
                    className={styles.heading}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span></span>
                    CREATING MILITARY LEADERS
                    <span></span>
                </motion.h1>

                <motion.p
                    className={styles.subtext}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    In nec vulputate dui. Quisque accumsan nisl eros.
                </motion.p>

                <div className={styles.sliderWrapper}>

                    {/* LEFT */}
                    <motion.button
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={prevSlide}
                        disabled={index === 0}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaChevronLeft />
                    </motion.button>

                    {/* SLIDER */}
                    <div className={styles.cardsContainer}>
                        <motion.div
                            className={styles.cards}
                            animate={{
                                x: `-${index * (100 / cardsToShow)}%`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 20,
                            }}
                        >
                            {data.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.cardWrapper}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                >
                                    <div className={styles.card}>
                                        <div className={styles.imageBox}>
                                            <img src={item.img} alt={item.title} />
                                        </div>

                                        <div className={styles.cardContent}>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT */}
                    <motion.button
                        className={`${styles.arrow} ${styles.arrowRight}`}
                        onClick={nextSlide}
                        disabled={index >= data.length - cardsToShow}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaChevronRight />
                    </motion.button>
                </div>

                {/* DOTS */}
                <div className={styles.dots}>
                    {Array.from({
                        length: Math.ceil(data.length / cardsToShow),
                    }).map((_, i) => (
                        <motion.button
                            key={i}
                            className={`${styles.dot} ${Math.floor(index / cardsToShow) === i
                                    ? styles.activeDot
                                    : ""
                                }`}
                            whileHover={{ scale: 1.3 }}
                            onClick={() => setIndex(i * cardsToShow)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}