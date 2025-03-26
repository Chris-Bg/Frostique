import React from 'react';
import styles from '../../css/aboutUsPage/History.module.css';
import decor from '../../images/aboutus-decor.png'

function History(){
    return (
        <div className={styles.fullWidthContainer}>
            <div className={styles.splitContainer}>
                <div className={styles.leftSideImage}>
                    <img
                        src={decor}
                        alt="Collection Cake"
                        className={styles.cakeImage}
                    />
                </div>

                <div className={styles.rightSideTable}>
                    <div className={styles.infoTable}>
                        <div className={styles.tableRow}>
                            <div className={styles.tableHeader}>HISTORY</div>
                            <div className={styles.tableContent}>
                                Serving from 10 to 80 people, the Collection cakes are designed
                                to amaze with grandiose and festive flair, no matter what the size.
                                If you would like to modify any part of the cake design, our team of
                                decorators will be happy to adjust it for you.
                            </div>
                        </div>

                        <div className={styles.tableRow}>
                            <div className={styles.tableHeader}>STYLE</div>
                            <div className={styles.tableContent}>
                                Serving from 10 to 80 people, the Collection cakes are designed
                                to amaze with grandiose and festive flair, no matter what the size.
                                If you would like to modify any part of the cake design, our team of
                                decorators will be happy to adjust it for you.
                            </div>
                        </div>

                        <div className={styles.tableRow}>
                            <div className={styles.tableHeader}>CONCEPT</div>
                            <div className={styles.tableContent}>
                                Serving from 10 to 80 people, the Collection cakes are designed
                                to amaze with grandiose and festive flair, no matter what the size.
                                If you would like to modify any part of the cake design, our team of
                                decorators will be happy to adjust it for you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;