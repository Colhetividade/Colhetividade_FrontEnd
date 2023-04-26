import React from "react";
import { Box, Card, CardActions, CardContent } from "@mui/material";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import fotoCadastroProduto from "../../assets/img/fotoFundoCadastroProduto.png";

import "./CadastroProdutos.css";

function CadastroProdutos() {
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

                                    <TextField label="Nome do Produto" className="form-text borda" fullWidth />

                                    <TextField label="Quantidade" className="form-text borda"  fullWidth />

                                    <TextField label="Preço" className="form-text borda"  fullWidth />

                                    <TextField label="Foto" className="form-text borda" fullWidth />

                                    <TextField label="Categoria" className="form-text borda" fullWidth />


                                    <CardActions className="center">

                                        <Button className="botao margin1" variant="contained">
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