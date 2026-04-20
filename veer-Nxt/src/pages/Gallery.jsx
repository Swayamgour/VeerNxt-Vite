import { useState } from "react";
import styles from "../styles/Gallery.module.css";
import BreadCrum from "../components/BreadCrum";
import Title from "../components/titles/Title";
import { filters, galleryData } from "../components/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
    const [active, setActive] = useState("all");

    const filtered =
        active === "all"
            ? galleryData
            : galleryData.filter((item) => item.category === active);

    return (
        <motion.section
            className={styles.gallerySection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            {/* BREADCRUMB */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <BreadCrum text="Gallery" />
            </motion.div>

            {/* TITLE */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Title heading="Gallery" />
            </motion.div>

            {/* FILTER BUTTONS */}
            <div className={styles.filters}>
                {filters.map((f) => (
                    <motion.button
                        key={f}
                        className={active === f ? styles.activeFilter : ""}
                        onClick={() => setActive(f)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {f === "all" ? "ALL" : f.toUpperCase()}
                    </motion.button>
                ))}
            </div>

            {/* GALLERY GRID */}
            <motion.div
                className={styles.grid}
                layout
            >
                <AnimatePresence mode="wait">
                    {filtered.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.imageWrap}>
                                <motion.img
                                    src={item.img}
                                    alt={item.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <motion.div
                                    className={styles.overlay}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <motion.span
                                        className={styles.zoomIcon}
                                        whileHover={{ scale: 1.3 }}
                                    >
                                        🔍
                                    </motion.span>
                                </motion.div>
                            </div>

                            <div className={styles.caption}>
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* LOAD MORE */}
            {filtered.length > 0 && (
                <motion.div
                    className={styles.showMore}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <motion.button
                        className={styles.showMoreBtn}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        LOAD MORE +
                    </motion.button>
                </motion.div>
            )}
        </motion.section>
    );
}