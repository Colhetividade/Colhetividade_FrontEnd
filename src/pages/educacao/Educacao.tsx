import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import imgCard1 from '../../assets/img/image 14.png'
import "./Educacao.css"
import { Cards } from '../../components/statics/card/Card';
import BasicModal from '../../components/statics/modal/Modal';
// linha 7 usa a interface criada no card
const cardProps = [
    {
        tituloCard: "Titulo card",
        cardConteudo: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Sapien in monti palavris qui num significa nadis i pareci latim.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Viva Forevis aptent taciti sociosqu ad litora torquent.",
        imagemInfo: {
            url: "https://i.ytimg.com/vi/bSiW7rObu3I/maxresdefault.jpg",
            alt: "prince"
        },
        id: "1"

    },
    {
        tituloCard: "Titulo card",
        cardConteudo: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Sapien in monti palavris qui num significa nadis i pareci latim.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Viva Forevis aptent taciti sociosqu ad litora torquent. ",
        imagemInfo: {
            url: "https://i.ytimg.com/vi/bSiW7rObu3I/maxresdefault.jpg",
            alt: "prince"
        },
        id: "2"

    },
    {
        tituloCard: "Titulo card",
        cardConteudo: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Sapien in monti palavris qui num significa nadis i pareci latim.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Viva Forevis aptent taciti sociosqu ad litora torquent.",
        imagemInfo: {
            url: "https://pbs.twimg.com/media/FWGjvPWX0AA7OG6.jpg:large",
            alt: "prince"
        },
        id: "3"

    },
    {
        tituloCard: "Titulo card",
        cardConteudo: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Sapien in monti palavris qui num significa nadis i pareci latim.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Viva Forevis aptent taciti sociosqu ad litora torquent.",
        imagemInfo: {
            url: "https://i.ytimg.com/vi/bSiW7rObu3I/maxresdefault.jpg",
            alt: "prince"
        },
        id: "4"


    }
]



const modalProps = [
    {
        videoModal: <iframe width="560" height="315" src="https://www.youtube.com/embed/9w8WW5T9dP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        txtModal: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.In elementis mé pra quem é amistosis quis leo.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
    },
    // {
    //     videoModal: <iframe width="560" height="315" src="https://www.youtube.com/embed/9w8WW5T9dP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    //     txtModal: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.In elementis mé pra quem é amistosis quis leo.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
    // }

]




function Educacao() {


    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} className='fundo'>
                <Grid item xs={12} direction='row' justifyContent="center" display="flex">
                    <h1>texto</h1>
                    <img src={imgCard1} alt="sdasdada" height='150px' />
                </Grid>
                {cardProps.map(card => {
                    return (
                        <>
                            <Cards
                                cardConteudo={card.cardConteudo}
                                imagemInfo={card.imagemInfo}
                                tituloCard={card.tituloCard}
                                id={card.id}

                            />

                            <div className='divCard'>
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

                            </div>



                        </>
                    )
                })}


            </Grid>


function Educacao() {
    return(
        <>
educacao
        </>
    )
}

export default Educacao;