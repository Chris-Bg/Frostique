import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/homepage/Navbar.module.css";
import Menu from "../Menu.jsx";

export default function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <span
                className={styles.navLink}
                onClick={() => navigate('/catalog')}
            >
                CATALOG
            </span>
            <span
                className={styles.navTitle}
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
            >
                FROSTIQUE
            </span>
            {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
            <span className={styles.navLink} onClick={() => setMenuOpen(true)}>MENU</span>
        </nav>
    );
}