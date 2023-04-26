import React from 'react'
import { CardMedia, Typography, CardContent, Grid, Card, CardActions } from '@mui/material';
import BasicModal from '../modal/Modal';

//linha 7 cria uma tipagem para os dados do card

interface CardProps {
    imagemInfo: {
        url: string;
        alt: string;
    };
    tituloCard: string;
    cardConteudo: string;
    id: string;

}

export function Cards({ imagemInfo, tituloCard, cardConteudo, id }: CardProps) {

    return (
        <>
            <CardMedia
                sx={{ height: 140 }}
                image={imagemInfo.url}
                title={imagemInfo.alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                    {tituloCard}
                </Typography>
                <Typography variant="body2" color="white">
                    {cardConteudo}
                </Typography>
            </CardContent>
        </>
    )
}

