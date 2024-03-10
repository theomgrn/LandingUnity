"use client";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import header from "./css/header.module.css";
import code from "./css/code.module.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from "@/app/component/navbar";
import Cards from "@/app/component/cards";

export default function Home() {
    return (
        <div>
            <header id="accueil" className={header.headerPart}>
                <Navbar/>
                <div className={header.escapeGame}>
                    <a href="#" data-letters="ESCAPE.GAME">ESCAPE.GAME</a>
                </div>
                <div className={header.subject}>
                    <div>
                        <h4>Membres&nbsp;<SouthEastIcon/></h4>
                    </div>
                    <div>
                        <p className={header.description}>Ce projet d'escape game sous Unity, à été mené part <span
                            className={header.colorPrimary}>Evan GRUCHOT</span> (Chargé de la réalisation des modèle 3D
                            sous blender ainsi que la mise en place des bruitage durant le jeu), <span
                                className={header.colorPrimary}>Thibault LIVRAN</span> (Chargé de la mise en place des
                            "mini-jeux" et des interactions sur Unity), <span className={header.colorPrimary}>Théo MAUGRAN</span> (Chargé
                            de l'import des éléments blender sur Unity, et élaboration du site web de rendu) </p>
                    </div>
                    <div>
                        <p>10-03-2024</p>
                    </div>
                </div>
                <hr/>
            </header>
            <main>
                <div id="projet">
                    <div className={header.subject}>
                        <div>
                            <h4>Code&nbsp;<SouthEastIcon/></h4>
                        </div>
                    </div>
                    <Cards/>
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
