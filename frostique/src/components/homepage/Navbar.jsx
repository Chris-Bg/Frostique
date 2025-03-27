import React from "react";
import { useState } from "react";
import { Link } from "@components/navigation/Link";
import styles from "@css/homepage/Navbar.module.css";
import Menu from "../Menu.jsx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
                <Link className={styles.navLink} to="/catalog">
                    CATALOG
                </Link>
                <Link className={styles.navTitle} to="/">
                    FROSTIQUE
                </Link>
            {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
            <span className={styles.navLink} onClick={() => setMenuOpen(true)}>MENU</span>
        </nav>
    );
}