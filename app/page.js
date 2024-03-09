"use client";
import styles from "./page.module.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from "@/app/component/navbar";

export default function Home() {
    return (
        <div>
            <header id="accueil"  className={styles.headerPart}>
                <Navbar/>
            </header>
            <main>
                <div id="projet" className={styles.projet}>
                    <h1>Unity</h1>
                    <p>Unity</p>
                    <Stack spacing={2} direction="row">
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </Stack>                </div>
                <div id="solutions" className={styles.solutions}>
                    part2
                </div>
                <div id="video" className={styles.video}>
                    part3
                </div>
            </main>
        </div>
    );
}
