import React from 'react';
import styles from '@css/aboutUsPage/AboutCake.module.css';
import cake from "@images/aboutus-cake.png"

function AboutCake() {
    return (
        <div className={styles.fullWidthContainer}>
            <div className={styles.splitContainer}>
                {/* Left Side (60%) - Table Layout */}
                <div className={styles.leftSide}>
                    <div className={styles.infoTable}>
                        {/* Row 1 */}
                        <div className={styles.tableRow}>
                            <div className={styles.tableHeader}>HOW TO ORDER YOUR CAKE</div>
                            <div className={styles.tableContent}>
                                Choose one of the chef's recipes, and add the number of the model you would like.
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className={styles.tableRow}>
                            <div className={styles.tableHeader}>CONDITIONS</div>
                            <div className={styles.tableContent}>
                                Serving from 10 to 80 people, the Collection cakes are designed to amaze with grandiose and festive flair, no matter what the size. If you would like to modify any part of the cake design, our team of decorators will be happy to adjust it for you.
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className={styles.tableRow}>
                            <div className={styles.tableHeader}>DELIVERY</div>
                            <div className={styles.tableContent}>
                                The Collection cakes are delivered to your address by our courier. All you have to do is open the box containing the cake and serve it to your guests.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side (40%) - Image */}
                <div className={styles.rightSide}>
                    <img
                        src={cake}
                        alt="Collection Cake"
                        className={styles.cakeImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutCake;