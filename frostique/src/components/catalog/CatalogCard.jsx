import React from "react";
import styles from "@css/catalog/CatalogCard.module.css";

export default function CatalogCard({ image, label }) {
    return (
        <div className={styles.catalogCard}>
            <img src={image} alt={label} className={styles.catalogImage} />
            <p className={styles.catalogLabel}>{label}</p>
        </div>
    );
}