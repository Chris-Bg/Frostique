import React from "react";

import { Router, Routes, Route } from "@components/navigation";
import { Homepage, CatalogPage, Recipes, Menu, AboutUsPage } from "@pages/index.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Homepage />
                </Route>
                <Route path="/catalog">
                    <CatalogPage />
                </Route>
                <Route path="/recipes">
                    <Recipes />
                </Route>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/about">
                    <AboutUsPage />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;