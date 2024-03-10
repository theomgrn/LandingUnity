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
            <Card className={code.card}>
                <CardActionArea>
                    <a href="../../public/images/code.jpg" download>
                        <CardMedia
                            component="img"
                            height="500"
                            image="./images/code.jpg"
                            alt="green iguana"
                        />
                    </a>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Déplacement du joureur
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card}>
                <CardActionArea>
                    <a href="../../public/images/code.jpg" download>
                        <CardMedia
                            component="img"
                            height="500"
                            image="./images/code.jpg"
                            alt="green iguana"
                        />
                    </a>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Porte
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card}>
                <CardActionArea>
                    <a href="../../public/images/code.jpg" download>
                        <CardMedia
                            component="img"
                            height="500"
                            image="./images/code.jpg"
                            alt="green iguana"
                        />
                    </a>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tiroir
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}