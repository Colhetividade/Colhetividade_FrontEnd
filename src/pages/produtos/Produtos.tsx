import React, { useRef, useState } from 'react';
import './Produtos.css';
// Material UI
import { Container, Box } from "@mui/material";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';

// Fotos
import foto1 from '../../assets/img/foto1-produtos.png';
import foto2 from '../../assets/img/feijao.png';
import foto3 from '../../assets/img/milho.png';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

function Produtos() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        // progressCircle.current.style.setProperty('--progress', 1 - progress);
        // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Container maxWidth="lg">
                {/* CARD */}
                <Box display="flex" flexDirection="row">
                    <Box>
                        <img className="img" src={foto1} alt="imagem de homem negro segurando um punhado de flores." />
                    </Box>
                    <Box>
                        <h1 className='titulo'> Loja Virtual </h1>
                        <p className='descricao'>Compre ou doe produtos e ajude a divulgar a agricultura local</p>
                    </Box>
                </Box>
                {/* CARROSEL */}
                <Box>
                    <Swiper className="swiper"
                         spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                             clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}

                    >
                        <SwiperSlide  > 
                            <Box display="flex" className="swiper1">
                                <Box>
                                    <p className="promocao">Promoções do momento</p>
                                    <p className="tipo">Arroz Integral <p>por R$10,99</p></p>
                                    <button className="button-swiper">Comprar</button>
                                </Box>
                                <Box className="swiper2">
                                    <img className="img-swiper" src={foto2} alt="foto de um saco de feijão" />
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                      
                    </Swiper>
                </Box>

                {/* CARDS */}

                <Box>
                    <div >
                       <Box display="flex" flexDirection="row">
                            <div className="card">
                                <Box display="flex" flexDirection="row">
                                    <Box>
                                        <h3 className="titulo-card">Feijão Fradinho</h3>
                                        <h4 className="valor">R$7,46</h4>
                                        <button className="button-card">Adicionar ao Carrinho</button>
                                    </Box>
                                    <Box>
                                        <img className="img-card" src={foto2} alt="foto de um saco de feijão" />
                                    </Box></Box></div>

                            <div className="card">
                                <Box display="flex" flexDirection="row">
                                    <Box>
                                        <h3 className="titulo-card">Feijão Fradinho</h3>
                                        <h4 className="valor">R$7,46</h4>
                                        <button className="button-card">Adicionar ao Carrinho</button>
                                    </Box>
                                    <Box>
                                        <img className="img-card" src={foto2} alt="foto de um saco de feijão" />
                                    </Box></Box></div>
                        </Box>
                        {/* Card Linha dois */}
                        <Box display="flex" flexDirection="row" >
                            <div className="card">
                                <Box display="flex" flexDirection="row">
                                    <Box>
                                        <h3 className="titulo-card">Feijão Fradinho</h3>
                                        <h4 className="valor">R$7,46</h4>
                                        <button className="button-card">Adicionar ao Carrinho</button>
                                    </Box>
                                    <Box>
                                        <img className="img-card" src={foto2} alt="foto de um saco de feijão" />
                                    </Box></Box></div>

                            <div className="card">
                                <Box display="flex" flexDirection="row">
                                    <Box>
                                        <h3 className="titulo-card">Feijão Fradinho</h3>
                                        <h4 className="valor">R$7,46</h4>
                                        <button className="button-card">Adicionar ao Carrinho</button>
                                    </Box>
                                    <Box>
                                        <img className="img-card" src={foto2} alt="foto de um saco de feijão" />
                                    </Box></Box></div>
                        </Box>

                    </div>

                </Box>


            </Container >
        </>
    )
}
export default Produtos;