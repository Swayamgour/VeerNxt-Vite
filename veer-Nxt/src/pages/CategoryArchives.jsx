import BreadCrum from "../components/BreadCrum";
import { posts } from "../components/data";
import Title from "../components/titles/Title";
import styles from "../styles/CategoryArchives.module.css";
import { motion } from "framer-motion";

export default function CategoryPage() {
    return (
        <motion.section
            className={styles.page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            {/* BREADCRUMB */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <BreadCrum text="Category Archives: Leaders" />
            </motion.div>

            {/* TITLE */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Title heading={"Category Archives: Leaders"} />
            </motion.div>

            <div className={styles.container}>
                <div className={styles.row}>

                    {/* LEFT POSTS */}
                    <motion.div
                        className={styles.posts}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {posts.map((post, i) => (
                            <motion.article
                                key={i}
                                className={styles.postCard}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className={styles.postTitle}>{post.title}</h3>

                                {/* META */}
                                <div className={styles.meta}>
                                    <span>👤 admin in</span>
                                    <span>{post.categories.join(", ")}</span>
                                    <span>•</span>
                                    <span>{post.tags.join(", ")}</span>
                                    <span>•</span>
                                    <span>📅 {post.date}</span>
                                </div>

                                {/* BODY */}
                                <div className={styles.postBody}>
                                    <motion.img
                                        src={post.img}
                                        alt={post.title}
                                        className={styles.postImage}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <p className={styles.excerpt}>{post.excerpt}</p>
                                </div>

                                <motion.a
                                    href="#"
                                    className={styles.readMore}
                                    whileHover={{ x: 5 }}
                                >
                                    READ MORE ➡
                                </motion.a>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* RIGHT SIDEBAR */}
                    <motion.aside
                        className={styles.sidebar}
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >

                        {/* ARCHIVES */}
                        <motion.div
                            className={styles.widget}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3>ARCHIVES</h3>
                            <ul>
                                <li><span>April 2015</span> <span>(11)</span></li>
                                <li><span>March 2015</span> <span>(2)</span></li>
                                <li><span>January 2015</span> <span>(2)</span></li>
                                <li><span>October 2014</span> <span>(1)</span></li>
                            </ul>
                        </motion.div>

                        {/* CATEGORIES */}
                        <motion.div
                            className={styles.widget}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3>CATEGORIES</h3>
                            <ul>
                                <li><span>Defense</span> <span>(6)</span></li>
                                <li className={styles.active}><span>Leaders</span> <span>(6)</span></li>
                                <li><span>Navy</span> <span>(6)</span></li>
                                <li><span>SEAL</span> <span>(8)</span></li>
                                <li><span>Tactics</span> <span>(7)</span></li>
                            </ul>

                            <div className={styles.subCategories}>
                                <div>› Aliquam pellentesque (1)</div>
                                <div>› Etiam dapibus (1)</div>
                                <div>› Quisque accumsan (1)</div>
                            </div>
                        </motion.div>

                        {/* TAGS */}
                        <motion.div
                            className={styles.widget}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3>TAGS</h3>
                            <div className={styles.tagCloud}>
                                {["career", "equipment", "forces", "weapon", "tactics", "training"].map((tag, i) => (
                                    <motion.span
                                        key={i}
                                        className={styles.tagItem}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                    </motion.aside>

                </div>
            </div>
        </motion.section>
    );
}