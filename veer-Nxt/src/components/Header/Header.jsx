import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const navigate = useNavigate();

    // Close menu on window resize (if screen becomes desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape" && open) {
                setOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    const goTo = (path) => {
        navigate(path);
        setOpen(false);
        setDropdownOpen({});
    };

    const toggleDropdown = (name) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <>
            {/* Overlay for mobile menu */}
            {open && (
                <div className={styles.overlay} onClick={() => setOpen(false)} />
            )}

            <motion.header
                className={styles.header}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* LOGO */}
                <motion.div
                    className={styles.logo}
                    onClick={() => goTo("/")}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src="/src/assets/logo.png" alt="logo" />
                </motion.div>

                {/* HAMBURGER BUTTON */}
                <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>

                {/* MOBILE SIDEBAR MENU */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <div className={styles.mobileHeader}>
                                <div className={styles.mobileLogo}>
                                    <img src="/src/assets/logo.png" alt="logo" />
                                </div>
                                <div className={styles.closeBtn} onClick={() => setOpen(false)}>
                                    <FaTimes />
                                </div>
                            </div>

                            <ul className={styles.mobileMenuList}>
                                <li onClick={() => goTo("/")}>Home</li>
                                <li onClick={() => goTo("/about")}>About</li>

                                {/* INFORMATION DROPDOWN */}
                                <li className={styles.mobileDropdown}>
                                    <div
                                        className={styles.mobileDropdownBtn}
                                        onClick={() => toggleDropdown("info")}
                                    >
                                        <span>Information</span>
                                        <span className={styles.arrow}>
                                            {dropdownOpen.info ? "▼" : "▶"}
                                        </span>
                                    </div>
                                    {dropdownOpen.info && (
                                        <ul className={styles.mobileSubmenu}>
                                            <li onClick={() => goTo("/information")}>Aenean ac felis</li>
                                            <li onClick={() => goTo("/information")}>Etiam et lorem sed</li>
                                            <li onClick={() => goTo("/information")}>Lorem ipsum dolor</li>
                                        </ul>
                                    )}
                                </li>

                                {/* BLOG DROPDOWN */}
                                <li className={styles.mobileDropdown}>
                                    <div
                                        className={styles.mobileDropdownBtn}
                                        onClick={() => toggleDropdown("blog")}
                                    >
                                        <span>Blog</span>
                                        <span className={styles.arrow}>
                                            {dropdownOpen.blog ? "▼" : "▶"}
                                        </span>
                                    </div>
                                    {dropdownOpen.blog && (
                                        <ul className={styles.mobileSubmenu}>
                                            <li onClick={() => goTo("/CategoryArchives")}>Defense</li>
                                            <li onClick={() => goTo("/CategoryArchives")}>Leaders</li>
                                            <li onClick={() => goTo("/CategoryArchives")}>Navy</li>
                                            <li onClick={() => goTo("/CategoryArchives")}>SEAL</li>
                                            <li onClick={() => goTo("/CategoryArchives")}>Tactics</li>
                                        </ul>
                                    )}
                                </li>

                                <li onClick={() => goTo("/gallery")}>Gallery</li>
                                <li onClick={() => goTo("/contacts")}>Contacts</li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* DESKTOP NAVIGATION */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.menu}>
                        <li onClick={() => goTo("/")}>Home</li>
                        <li onClick={() => goTo("/about")}>About</li>

                        {/* INFORMATION DROPDOWN */}
                        <li className={styles.dropdown}>
                            <span>Information</span>
                            <ul className={styles.submenu}>
                                <li onClick={() => goTo("/information")}>Aenean ac felis</li>
                                <li onClick={() => goTo("/information")}>Etiam et lorem sed</li>
                                <li onClick={() => goTo("/information")}>Lorem ipsum dolor</li>
                            </ul>
                        </li>

                        {/* BLOG DROPDOWN */}
                        <li className={styles.dropdown}>
                            <span>Blog</span>
                            <ul className={styles.submenu}>
                                <li onClick={() => goTo("/CategoryArchives")}>Defense</li>
                                <li onClick={() => goTo("/CategoryArchives")}>Leaders</li>
                                <li onClick={() => goTo("/CategoryArchives")}>Navy</li>
                                <li onClick={() => goTo("/CategoryArchives")}>SEAL</li>
                                <li onClick={() => goTo("/CategoryArchives")}>Tactics</li>
                            </ul>
                        </li>

                        <li onClick={() => goTo("/gallery")}>Gallery</li>
                        <li onClick={() => goTo("/contacts")}>Contacts</li>
                    </ul>
                </nav>
            </motion.header>
        </>
    );
}