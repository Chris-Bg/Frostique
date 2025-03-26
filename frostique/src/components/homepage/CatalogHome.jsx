import React from "react";
import CatalogCardHome from "./CatalogCardHome.jsx";
import styles from "../../css/homepage/CatalogHome.module.css";

export default function CatalogHome({ items }) {
    return (
        <section className={styles.catalog}>
            {items.map((item, index) => (
                <CatalogCardHome key={index} image={item.image} label={item.label} />
            ))}
        </section>
    );
}