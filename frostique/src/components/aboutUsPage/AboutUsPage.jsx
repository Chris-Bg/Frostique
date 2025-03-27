import React from 'react';
import Navbar from '../homepage/Navbar.jsx';
import Footer from '../homepage/Footer.jsx';
import styles from '@css/aboutUsPage/AboutUsPage.module.css';
import Introduction from "./Introduction.jsx";
import AboutCake from "./AboutCake.jsx";
import Paragraph from "./Paragraph.jsx";
import History from "./History.jsx";

function AboutUsPage() {
    return (
        <div>
            <Navbar />

            <main className={styles.mainContent}>
                <Introduction />
                <AboutCake />
                <Paragraph />
                <History />
            </main>

            <Footer />
        </div>
    );
};

export default AboutUsPage;