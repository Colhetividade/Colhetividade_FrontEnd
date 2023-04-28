import React, { useState } from "react";
import { Box, Card, CardActions, CardContent } from "@mui/material";
import { Button, Grid, Typography, TextField } from "@material-ui/core";


import "./CadastroProdutos.css";
import { toast } from "react-toastify";

function CadastroProdutos() {

    const[nomeProduto, setNomeproduto] = useState('')
    const[quantidade, setQuantidade] = useState('')
    const[preco, setPreco] = useState('')
    const[foto, setFoto] = useState('')
    

    return (
        <>
            <Grid container>
                <Grid className="alinhar2" item xs={6}>

                    <Box className="box" >

                        <Typography className="margin1" variant="h4" align="center">
                            Cadastro de Produto
                        </Typography>

                        <Card className="card borda" sx={{ maxWidth: 500, minHeight: 500 }}>
                            <CardContent>
                                <form>

                                    <TextField 
                                    value={nomeProduto}
                                    onChange={(e) => {  
                                        setNomeproduto(e.target.value)
                                    }}

                                     label="Nome do Produto" className="form-text borda" fullWidth
                                     
                                     
                                     />

                                    <TextField
                                    value={quantidade}
                                    onChange={(e) => {  
                                        setQuantidade(e.target.value)
                                    }}
                                    
                                    label="Quantidade" className="form-text borda"  fullWidth />

                                    <TextField
                                    value={preco}
                                    onChange={(e) => {  
                                        setPreco(e.target.value)
                                    }}
                                     label="Preço" className="form-text borda"  fullWidth />

                                    <TextField
                                    value={foto}
                                    onChange={(e) => {  
                                        setFoto(e.target.value)
                                    }}
                                     label="Foto" className="form-text borda" fullWidth />

                                    <TextField label="Categoria" className="form-text borda" fullWidth />


                                    <CardActions className="center">

                                        <Button
                                        onClick={() => {
                                            if (nomeProduto === ''){
                                                toast.error('Nome do produto é obrigatório', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                    });
                                            
                                            }
                                            else if(nomeProduto.length <= 2){
                                                toast.error('Insira ao menos 3 caracteres no Nome', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                    });
                                            }

                                            else if(nomeProduto.length > 100){
                                                toast.error('Máximo de caracteres no Nome é 100', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                    });
                                            }

                                            else if(quantidade === '' ){
                                                toast.error('Quantidade é obrigatória', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                    });
                                            }
                                            else if (preco === ''){
                                                toast.error('Preço é obrigatório', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                    });
                                            }
                                            else if (foto === ''){
                                                toast.error('Foto é obrigatória', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                    });
                                            }
                                        
                                        }}
                                        
                                        className="botao margin1" variant="contained">
                                            Cadastrar
                                        </Button>

                                    </CardActions>

                                </form>
                            </CardContent>
                        </Card>

                    </Box>
                </Grid>
                <Grid item xs={6} className="alinhar3" >

                </Grid>
            </Grid>

        </>
        
    )
}

export default CadastroProdutos;