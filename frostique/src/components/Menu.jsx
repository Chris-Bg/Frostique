import { useNavigate } from "react-router-dom";
import styles from "../css/Menu.module.css";
import menuItems from "../assets/menuItems.json";

function Menu({ onClose }){
    const navigate = useNavigate();


    return (
        <div className={styles.menu}>
            <div className={styles.menuNavbar}>
                <div className={styles.menuNavSpacer}></div>
                <div
                    className={styles.menuNavTitle}
                    onClick={() => navigate('/')}
                >
                    FROSTIQUE
                </div>
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
                        <div
                            key={item.id}
                            className={`${styles.menuItem} ${item.link ? styles.clickable : ''}`}
                            onClick={() => item.link && navigate(item.link)}
                        >
                            <span className={styles.menuItemNumber}>{item.number}</span>
                            <span className={styles.menuItemText}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;