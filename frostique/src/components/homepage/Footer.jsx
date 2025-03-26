import React from "react";
import styles from '../../css/homepage/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>

            <hr className={styles.footerTopDivider} />

            <div className={styles.footerContentContainer}>

                <div className={`${styles.footerColumn} ${styles.quickLinks}`}>
                    <h3 className={styles.footerTitle}>Quick Links</h3>
                    <div className={styles.footerLinks}>
                        <a href="#" className={styles.footerLink}>Terms of use</a>
                        <a href="#" className={styles.footerLink}>Privacy Policy</a>
                        <a href="#" className={styles.footerLink}>Contract Terms</a>
                    </div>
                </div>

                <div className={`${styles.footerColumn} ${styles.openingHours}`}>
                    <h3 className={styles.footerTitle}>Opening Hours</h3>
                    <div className={styles.hoursContainer}>
                        <div className={styles.hoursRow}>
                            <span className={styles.days}>Monday-Friday</span>
                            <span className={styles.hours}>9AM-6PM</span>
                        </div>
                        <hr className={styles.hoursDivider} />

                        <div className={styles.hoursRow}>
                            <span className={styles.days}>Saturday</span>
                            <span className={styles.hours}>10AM-4PM</span>
                        </div>
                        <hr className={styles.hoursDivider} />

                        <div className={styles.hoursRow}>
                            <span className={styles.days}>Sunday</span>
                            <span className={styles.hours}>Closed</span>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footerColumn} ${styles.contactUs}`}>
                    <h3 className={styles.footerTitle}>Contact Us</h3>
                    <div className={styles.contactInfo}>
                        <p>123 Avenue des Champs, Paris, France 75008</p>
                        <p>Email: contact@frostique.com</p>
                        <p>Phone: +33 1 23 45 67 89</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;