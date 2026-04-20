import BreadCrum from "../components/BreadCrum";
import Title from "../components/titles/Title";
import styles from "../styles/InformationDetail.module.css";
import { motion } from "framer-motion";

export default function InformationDetail() {
    return (
        <motion.div
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
                <BreadCrum text="Aenean ac felis" />
            </motion.div>

            {/* TITLE */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Title heading={"Aenean an felis"} />
            </motion.div>

            {/* MAIN CONTENT */}
            <div className={styles.container}>
                <div className={styles.row}>

                    {/* LEFT CONTENT */}
                    <motion.div
                        className={styles.left}
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="https://demo.gridgum.com/wordpress/military/wp-content/uploads/2015/04/slide02-300x184.jpg"
                            alt="Military training"
                            className={styles.image}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque rhoncus nisl mauris, vel mollis nisi cursus ut.
                            Integer laoreet non nibh ac auctor. Nam vehicula metus quis
                            egestas pellentesque. Duis vestibulum ullamcorper lorem ac
                            ornare. Praesent pulvinar, odio sed sodales porttitor, nulla
                            arcu vehicula nibh, a molestie nisi est sollicitudin massa.
                            Cras semper pharetra nulla. Fusce venenatis dolor ante, ac
                            convallis urna porta vitae. Vivamus maximus, arcu ac tempus
                            tempor, tellus enim tempor enim, ut consequat massa massa
                            sed turpis. Donec metus eros, feugiat in arcu eget, pretium
                            commodo risus. Donec lobortis efficitur placerat. Pellentesque
                            iaculis dignissim ligula et viverra. Nullam dictum dictum
                            magna, in elementum est ornare eget.
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>

                            Nunc condimentum congue est eu finibus. Fusce ac elit ac
                            elit consectetur tincidunt. Praesent ut commodo ipsum.
                            Phasellus laoreet, magna non tempor dapibus, est ipsum
                            molestie metus, eget pharetra enim eros a magna. Etiam quis
                            metus a sapien gravida venenatis. Nunc scelerisque velit
                            imperdiet aliquet scelerisque. Curabitur et dui purus.
                            Pellentesque quis fermentum neque. Aenean congue dapibus
                            ante, a convallis purus tincidunt id. Aenean venenatis nec
                            quam vel gravida. Vestibulum ullamcorper augue turpis, vel
                            convallis est mollis posuere. In ut vulputate tellus.
                            Suspendisse vitae magna id neque lacinia aliquet. Proin sed
                            mauris vel magna rhoncus imperdiet lobortis at dui. Donec
                            porta pretium elit. Aliquam neque odio, feugiat sagittis
                            velit vel, laoreet imperdiet ex.
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>

                            Donec arcu tortor, venenatis vitae arcu a, pretium dignissim
                            mauris. Nulla hendrerit laoreet rutrum. Suspendisse mattis
                            sodales justo, vitae dignissim odio rutrum a. Nam nibh nunc,
                            malesuada et sem volutpat, suscipit accumsan sem. Aliquam
                            nisi nisl, suscipit et lorem sed, pretium sollicitudin neque.
                            Quisque lacinia placerat lorem eu suscipit. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec nisl lectus, tristique porta nibh id,
                            tempor dignissim elit.
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>

                            Nunc nec dui eros. Curabitur viverra, ante vel congue
                            porttitor, nunc mauris elementum lacus, id commodo tellus
                            odio nec odio. Suspendisse a urna mattis, fringilla mi non,
                            facilisis neque. Praesent dignissim placerat sem egestas
                            luctus. Nullam dapibus diam a molestie sodales. Pellentesque
                            nec lectus interdum, ullamcorper velit sit amet, ullamcorper
                            lorem. Fusce lacus dui, cursus a ligula vitae.
                        </motion.p>

                       
                    </motion.div>

                    {/* RIGHT SIDEBAR */}
                    <motion.div
                        className={styles.sidebar}
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >

                        {/* INFORMATION */}
                        <motion.div
                            className={styles.widget}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3>Information</h3>
                            <ul>
                                <li className={styles.activeItem}>
                                    Aenean ac felis
                                </li>
                                <li>
                                    Etiam et lorem sed
                                    <span className={styles.plus}>+</span>
                                </li>
                                <li>Lorem ipsum dolor</li>
                            </ul>
                        </motion.div>

                        {/* SEARCH */}
                        <motion.div
                            className={styles.widget}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3>Search</h3>
                            <div className={styles.searchBox}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className={styles.searchInput}
                                />
                                <button className={styles.searchBtn}>
                                    🔍
                                </button>
                            </div>
                        </motion.div>

                        {/* ARCHIVES */}
                        <motion.div
                            className={styles.widget}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3>Archives</h3>
                            <ul>
                                <li>March 2024</li>
                                <li>February 2024</li>
                                <li>January 2024</li>
                            </ul>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
}