"use client";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import styles from "./css/header.module.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from "@/app/component/navbar";

export default function Home() {
    return (
        <div>
            <header id="accueil" className={styles.headerPart}>
                <Navbar/>
                <div className={styles.escapeGame}>
                    <a href="#" data-letters="ESCAPE.GAME">ESCAPE.GAME</a>
                </div>
                <div className={styles.subject}>
                    <div>
                        <h4>Membres&nbsp;<SouthEastIcon/></h4>
                    </div>
                    <div>
                        <p className={styles.description}>Ce projet d'escape game sous Unity, à été mené part <span className={styles.colorPrimary}>Evan GRUCHOT</span>(Chargé de la réalisation des modèle 3D sous blender ainsi que la mise en place des bruitage durant le jeu), <span className={styles.colorPrimary}>Thibault LIVRAN</span>(Chargé de la mise en place des "mini-jeux" et des interactions sur Unity), <span className={styles.colorPrimary}>Théo MAUGRAN</span> (Chargé de l'import des éléments blender sur Unity, et élaboration du site web de rendu) </p>
                    </div>
                    <div>
                        <p>10-03-2024</p>
                    </div>
                </div>
                <hr />
            </header>
            <main>
            <div id="projet">
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="outlined"
                            sx={{
                                color: "white",
                                borderColor: "white",
                                '&:hover': {
                                    borderColor: "#bbc5b8",
                                }
                            }}
                        >
                            .APK
                        </Button>
                    </Stack>
                </div>
                <div id="solutions">
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="outlined"
                            sx={{
                                color: "black",
                                borderColor: "black",
                                '&:hover': {
                                    borderColor: "#bbc5b8",
                                }
                            }}
                        >
                            .APK
                        </Button>
                    </Stack>
                </div>
                <div id="video">
                    part3
                </div>
            </main>
        </div>
    );
}
