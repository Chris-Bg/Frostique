import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Moto from "./Moto.jsx";
import CatalogHome from "./CatalogHome.jsx";
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";
import "@css/homepage/Homepage.module.css";
import catalogImages from "@assets/catalogHomepage.json";

export default function Homepage() {
    return (
        <div className="main">
            <div className="div-2">
                <Navbar />
                <Header />
                <Moto
                    subText="A Variety Of Creations For All Your Celebrations"
                />
                <CatalogHome
                    items={catalogImages}
                />
                <AboutUs
                    tradition="Over the course of many years, Bastien Blanc-Tailleur has cultivated a rare savoir-faire. His wedding cakes are much more than just a special dessert; they are designed to be works of art on which every detail is meticulously hand-crafted."
                    recipes="Upholding the true French pastry- making tradition, Collection is a range of refined cakes using only the highest quality, freshest ingredients from select regions of France."
                />
                <Footer />
            </div>
        </div>
    );
}
