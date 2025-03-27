import React from 'react';
import { useState } from 'react';
import styles from '@css/recipes/RecipesName.module.css';

function RecipeName({ name, subtext, image, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${styles.recipeContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <img
                    src={image}
                    alt={name}
                    className={`${styles.recipeImage} ${index % 2 === 0 ? styles.left : styles.right}`}
                />
            )}
            <h2 className={styles.recipeName}>{name}</h2>
            <p className={styles.recipeSubtext}>{subtext}</p>
        </div>
    );
}

export default RecipeName;