import React from "react";
import styles from "@css/homepage/CatalogCardHome.module.css";

export default function CatalogCardHome({ image, label }) {
    return (
        <div className={styles.catalogCard}>
            <img src={image} alt={label} className={styles.catalogImage} />
            <p className={styles.catalogLabel}>{label}</p>
        </div>
    );
}