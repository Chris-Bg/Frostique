import React from "react";
import styles from "@css/homepage/Header.module.css";
import headerImage from "@images/header-img.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.backgroundText}>FROSTIQUE</div>
            <img src={headerImage} alt="Main Cake" className={styles.mainImage} />
        </header>
    );
}