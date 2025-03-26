import React from 'react';
import styles from '../../css/aboutUsPage/Paragraph.module.css';

function Paragraph() {
    return (
        <div className={styles.paragraphContainer}>
            <p className={styles.paragraphText}>
                <span className={styles.italic}> over  </span> the past few years, Bastien Blanc-Tailleur has made a name for himself in the world of
                <span className={styles.italic}> luxury weddings </span> and become a veritable
                <span className={styles.italic}> reference </span>.
            </p>
        </div>
    );
};

export default Paragraph;