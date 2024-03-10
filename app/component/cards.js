import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import code from "@/app/css/code.module.css";

export default function ActionAreaCard() {
    return (
        <div className={code.listCards}>
            <Card className={code.card} sx={{ border: '1px solid black' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image="./images/projectFolder.png"
                        alt="image"
                    />
                    <CardContent sx={{ backgroundColor: '#ebebeb' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Organisation des dossiers du projet
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Nous avons pris soin d'organiser efficacement les fichiers et dossers de notre projet pour nous y retrouver plus facilement.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card} sx={{ border: '1px solid black' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image="./images/projectHierarchy.png"
                        alt="image"
                    />
                    <CardContent sx={{ backgroundColor: '#ebebeb' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Organisation de la scène
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Il en va de même pour nos scènes, nous avons tout ranger proprement.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card} sx={{ border: '1px solid black' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image="./images/uiAudio.png"
                        alt="image"
                    />
                    <CardContent sx={{ backgroundColor: '#ebebeb' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Effets sonores
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Nous avons ajouter divers effets sonores, que ce soit dans le menu, lors de l'ouverture de la porte et à l'extérieur de la pièce pour plus d'immersion.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image="./images/drawer.png"
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gestion du tiroir fermé à clé
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Avec ce script nous pouvons verouillé un tiroir et gérer l'insertion de la clé dans la serrure.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image="./images/keypad.png"
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gestion du pad numérique
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cet extrait de code nous a permis de gérer efficacement la porte. Celle-ci est verouillée tant que l'on ne tape pas le bon code.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}