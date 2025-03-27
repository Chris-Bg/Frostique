import styles from "@css/Menu.module.css";
import menuItems from "@assets/menuItems.json";
import { Link } from "@components/navigation/Link";

function Menu({ onClose }){

    return (
        <div className={styles.menu}>
            <div className={styles.menuNavbar}>
                <div className={styles.menuNavSpacer}></div>
                    <Link className={styles.menuNavTitle} href="/">FROSTIQUE</Link>
                    <div
                        className={styles.menuClose}
                        onClick={onClose}
                    >
                        CLOSE
                    </div>
            </div>

            <div className={styles.menuItemsContainer}>
                <div className={styles.menuItems}>
                    {menuItems.map((item) => (
                        item.link ? (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`${styles.menuItem} ${styles.clickable}`}
                                onClick={onClose}
                            >
                                <span className={styles.menuItemNumber}>{item.number}</span>
                                <span className={styles.menuItemText}>{item.text}</span>
                            </Link>
                        ) : (
                            <div
                                key={item.id}
                                className={styles.menuItem}
                            >
                                <span className={styles.menuItemNumber}>{item.number}</span>
                                <span className={styles.menuItemText}>{item.text}</span>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;