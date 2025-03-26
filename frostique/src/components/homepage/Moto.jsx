import React from "react";
import styles from "../../css/homepage/Moto.module.css";

export default function Moto({ subText }) {
    return (
        <section className={styles.moto}>
            <h1 className={styles.mainText}>
                <span className={styles.instrumentSerif}>Elegantly embodying</span>
                <br />
                <span className={styles.instrumentSerif}>the essence of</span>
                <br />
                <span className={styles.cormorantItalic}>refinement</span>
                <span className={styles.instrumentSerif}>.</span>
            </h1>
            <p className={styles.subText}>{subText}</p>
        </section>
    );
}