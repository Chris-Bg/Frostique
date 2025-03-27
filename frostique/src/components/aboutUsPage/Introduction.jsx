import styles from "@css/aboutUsPage/Introduction.module.css";


function Introduction() {
    return (
        <main className={styles.content}>
            <div className={styles.aboutSection}>
                <div className={styles.titleParagraphContainer}>
                    <h2 className={styles.sectionTitle}>ABOUT US</h2>
                    <p className={styles.aboutText}>
                        The chef Bastien Blanc-Tailleur has infused the Collection cakes with all his
                        <span className={styles.italic}> craftsmanship </span> and creativity,
                        <span className={styles.italic}> offering </span> an extensive range of over 45 different models in a variety
                        <span className={styles.italic}> colors </span> and
                        <span className={styles.italic}> shapes </span>.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Introduction;