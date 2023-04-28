import React from 'react';
import {  Card, Grid} from '@mui/material';
import imgCard1 from '../../assets/img/image 14.png'
import "./Educacao.css"
import { Cards } from '../../components/statics/card/CardEduca';
import BasicModal from '../../components/statics/modalCard/ModalCard';
import { cardProps } from '../../utils/payloadEduca';


function Educacao() {


    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} className='fundo'>
                <Grid item xs={12} direction='row' justifyContent="center" display="flex">
                    <div className='textoEdu'>
                        <h1>Educa+</h1>
                        <h3 className='texto3'> Um espaço de aprendizagem para você descobrir mais sobre agricultura familiar</h3>
                    </div>
                    <div className='imagemEduca' >
                       <img src={imgCard1} alt="pessoa segurando uma cesta com alimentos" height="250px" /> 
                    </div>
                    
                </Grid>
                {cardProps.map(card => {
                    return (
                        <Grid item xs={12} xl={4} justifyContent="center" display="flex">
                            <Card sx={{ maxWidth: 420 }} style={{ background: "#4f9368", margin: 20}}>
                                <Cards
                                    cardConteudo={card.cardConteudo}
                                    imagemInfo={card.imagemInfo}
                                    tituloCard={card.tituloCard}
                                    id={card.id}
                                />
                                <BasicModal
                                    
                                    videoModal={card.modalProps.videoModal}
                                    txtModal={card.modalProps.txtModal} 
                                />
                            </Card>
                        </Grid>
                    )
                })}


            </Grid>

        </>
    )
}


export default Educacao;
