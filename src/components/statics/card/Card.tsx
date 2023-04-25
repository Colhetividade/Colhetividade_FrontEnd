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

const modalProps = [
    {
        videoModal: <iframe width="560" height="315" src="https://www.youtube.com/embed/9w8WW5T9dP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        txtModal: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.In elementis mé pra quem é amistosis quis leo.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
    },
    {
        videoModal: <iframe width="560" height="315" src="https://www.youtube.com/embed/9w8WW5T9dP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        txtModal: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.In elementis mé pra quem é amistosis quis leo.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
    }

]



export function Cards({ imagemInfo, tituloCard, cardConteudo, id }: CardProps) {

    return (
        <Grid item xs={12} xl={6} justifyContent="center" display="flex">
            <Card sx={{ maxWidth: 420 }} style={{ background: "#4f9368", margin: 20 }}>
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
                
                <CardActions>

                    {                   
                            modalProps.map(modal => {
                                return (
                                    <BasicModal
                                        videoModal={modal.videoModal}
                                        txtModal={modal.txtModal}

                                    />
                                )
                            })
                        
                    }

                </CardActions>

            </Card>
        </Grid>
    )
}

