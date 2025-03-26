import React from "react";
import styles from '../../css/homepage/AboutUs.module.css';

const AboutUs = ({ tradition, recipes }) => (
    <div className={styles.outerContainer}>
        <div className={styles.aboutUsContainer}>
            <div className={styles.aboutUsBox}>
                <h3 className={styles.aboutUsTitle}>TRADITION</h3>
                <p className={styles.aboutUsText}>{tradition}</p>
            </div>

            <div className={styles.aboutUsBox}>
                <h3 className={styles.aboutUsTitle}>OUR BEST RECIPES</h3>
                <p className={styles.aboutUsText}>{recipes}</p>
            </div>
        </div>
    </div>
);

export default AboutUs;