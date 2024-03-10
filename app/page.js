"use client";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import header from "./css/header.module.css";
import code from "./css/code.module.css";
import solution from "./css/solution.module.css";
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
                    <div className={code.subject}>
                        <div>
                            <h4>Code&nbsp;<SouthEastIcon/></h4>
                        </div>
                    </div>
                    <Cards/>
                </div>
                <div id="solutions">
                    <hr/>
                    <div className={solution.subject}>
                        <div>
                            <h4>Solution&nbsp;<SouthEastIcon/></h4>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>01</h2>
                                <h2 className={solution.etape}>Regarder le tableau et comprendre l'indice</h2>
                                <p className={solution.etapeDescription}>Il permet d'obtenir un code a 3 chiffre
                                    permettant d'ouvrir la porte de sortie</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>02</h2>
                                <h2 className={solution.etape}>Couleur 1</h2>
                                <p className={solution.etapeDescription}>Voir que dans la poubelle il y a un petit objet
                                    bleu, qui pourrait correspondre à une des couleurs du code.
                                </p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>03</h2>
                                <h2 className={solution.etape}>Couleur 1</h2>
                                <p className={solution.etapeDescription}>Retourner le contenu de la poubelle par terre
                                    et attraper le cube Bleu sur lequel il
                                    y a écrit le numéro 4</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>04</h2>
                                <h2 className={solution.etape}>Couleur 2</h2>
                                <p className={solution.etapeDescription}>Voir qu’il est possible d’ouvrir les deux
                                    premiers tiroir de la commode sous le bureau mais pas le troisième.</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>05</h2>
                                <h2 className={solution.etape}>Couleur 2</h2>
                                <p className={solution.etapeDescription}>Voir que le troisième possède une serrure rouge
                                    et pourrait correspondre au numéro du code rouge.</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>06</h2>
                                <h2 className={solution.etape}>Couleur 2</h2>
                                <p className={solution.etapeDescription}>Trouver la clé rouge sur le bureau et la placer
                                    dans la serrure du tiroir.</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>07</h2>
                                <h2 className={solution.etape}>Couleur 2</h2>
                                <p className={solution.etapeDescription}>Le tiroir est maintenant ouvrable et le chiffre
                                    2 est écrit dessus en rouge, ça correspond au chiffre rouge.
                                </p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>08</h2>
                                <h2 className={solution.etape}>Couleur 3</h2>
                                <p className={solution.etapeDescription}>Voir que le seul objet de la dernière couleur
                                    du tableau , vert , sont les aimant collée à celui-ci.</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>09</h2>
                                <h2 className={solution.etape}>Couleur 3</h2>
                                <p className={solution.etapeDescription}>Le nombre d’aimant collé au tableau représente
                                    donc le dernier chiffre du code.</p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>10</h2>
                                <h2 className={solution.etape}>Porte de sortie</h2>
                                <p className={solution.etapeDescription}>Pour l’ordre des chiffres du code, il suffit de reprendre l’ordre des couleurs affichée sur le tableau
                                </p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>11</h2>
                                <h2 className={solution.etape}>Porte de sortie</h2>
                                <p className={solution.etapeDescription}>Une fois le code entré, la porte est maintenant ouvrable.
                                </p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className={solution.solution}>
                        <div className={solution.solutionMargin}>
                        </div>
                        <div className={solution.solutionEtape}>
                            <hr/>
                            <div className={solution.ligneEtape}>
                                <h2>12</h2>
                                <h2 className={solution.etape}>Porte de sortie</h2>
                                <p className={solution.etapeDescription}>On ouvre la porte, l’écran de victoire apparait ainsi qu’un bouton de reset et de retour au menu.
                                </p>
                                <img src="./images/code.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="video">
                    <hr/>
                    <div className={solution.subject}>
                        <div>
                            <h4>Gameplay&nbsp;<SouthEastIcon/></h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
