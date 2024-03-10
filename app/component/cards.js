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
                        height="500"
                        image="./images/code.jpg"
                        alt="green iguana"
                    />
                    <CardContent sx={{ backgroundColor: '#ebebeb' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Déplacement du joueur
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={code.card} sx={{ border: '1px solid black' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="500"
                        image="./images/code.jpg"
                        alt="green iguana"
                    />
                    <CardContent sx={{ backgroundColor: '#ebebeb' }}>
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
            <Card className={code.card} sx={{ border: '1px solid black' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="500"
                        image="./images/code.jpg"
                        alt="green iguana"
                    />
                    <CardContent sx={{ backgroundColor: '#ebebeb' }}>
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