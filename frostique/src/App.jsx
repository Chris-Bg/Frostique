// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import CatalogPage from "./components/catalog/CatalogPage.jsx";
import Menu from "./components/Menu.jsx";
import AboutUsPage from "./components/aboutUsPage/AboutUsPage.jsx";
import Recipes from "./components/recipes/Recipes.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<AboutUsPage />} />
            </Routes>
        </Router>
    );
}

export default App;