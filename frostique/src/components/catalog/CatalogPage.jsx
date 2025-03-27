import React from "react";
import CatalogCard from "./CatalogCard.jsx";
import Navbar from "../homepage/Navbar.jsx";
import styles from "@/css/catalog/CatalogPage.module.css";
import catalogData from "@assets/catalogPage.json";

export default function CatalogPage() {
    const rows = 8;
    const cols = 6;

    const filledCells = [
        [0,0],[0,3],[0,5],
        [1,1],[1,4],
        [2,0],[2,2],[2,5],
        [3,0],[3,3],[3,4],
        [4,1],[4,2],[4,5],
        [5,0],[5,4],[5,5],
        [6,0],[6,2],[6,4],
        [7,1],[7,3],[7,5]
    ];

    const gridCells = [];
    let dataIndex = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const isFilled = filledCells.some(([r, c]) => r === row && c === col);
            gridCells.push({
                row,
                col,
                filled: isFilled,
                data: isFilled ? catalogData[dataIndex++] : null
            });
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.catalogPage}>
                <div className={styles.catalogGrid}>
                    {gridCells.map((cell, index) => (
                        cell.filled ? (
                            <CatalogCard
                                key={`card-${index}`}
                                image={cell.data.image}
                                label={cell.data.label}
                            />
                        ) : (
                            <div key={`empty-${index}`} className={styles.emptyCell} />
                        )
                    ))}
                </div>
            </div>
        </>
    );
}