import React from "react";
import { Box } from "@mui/material";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import fotoCadastroProduto from "../../assets/img/fotoFundoCadastroProduto.png";

function CadastroProdutos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box flexDirection="column" paddingX={20} >

                        <form>
                            <Typography variant="h4" align="center">
                                Cadastro de Produto
                            </Typography>

                            <TextField label="Nome do Produto" required />


                            <TextField label="Preço" required />

                            <TextField type="password" label="Senha" required />


                            <TextField label="Tipo de Usuário" required />

                            <TextField label="Foto" required />


                            <TextField type="password" label="Senha" required />


                            <Button variant="contained">
                                Cadastrar
                            </Button>
                        </form>

                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={fotoCadastroProduto} alt="" width="500px" height="500px" />
                </Grid>
            </Grid>

        </>
    )
}
export default CadastroProdutos;