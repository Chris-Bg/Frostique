import React from 'react';
import Navbar from '../homepage/Navbar.jsx';
import Footer from '../homepage/Footer.jsx';
import RecipeName from './RecipesName.jsx';
import styles from '../../css/recipes/Recipes.module.css';
import recipes from '../../assets/recipes.json';

function Recipes(){
    return (
        <div className={styles.recipesPage}>
            <Navbar />

            <main className={styles.recipesContainer}>
                {recipes.map((recipe, index) => (
                    <RecipeName
                        key={index}
                        name={recipe.name}
                        subtext={recipe.subtext}
                        image={recipe.image}
                        index={index}
                    />
                ))}
            </main>

            <Footer />
        </div>
    );
};

export default Recipes;