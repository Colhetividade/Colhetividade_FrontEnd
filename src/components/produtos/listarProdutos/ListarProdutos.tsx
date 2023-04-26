import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListarProdutos.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getProduto() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProduto()

  }, [produtos.length])

  return (
    <>
    <img src="https://www.raizs.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnossa-horta.bd960607.png&w=1920&q=75" className='banner'/>
    <h1> Nossos Produtos </h1>
      <Grid container spacing={2}>
        {
          produtos.map(produto => (
            <Grid className="card-produtos"item xs={2} key={produto.id}>
              <Card >
                <CardContent>
                  <img className="card-foto"src={produto.fotoProduto}/>
                  <Typography color="textSecondary" gutterBottom>
                  {produto.nomeProduto}
                  </Typography>
                  <Typography variant="h5" component="h2">
                   R$ {produto.preco},00
                  </Typography>
                                </CardContent>
                <CardActions>
                  <Button className="botao">Adicionar ao carrinho</Button>
                </CardActions>
              </Card>
              </Grid>
  
      
     
    

            //     <Box m={2} >
            //   <Card variant="outlined">
            //     <CardContent>
            //       <Typography color="textSecondary" gutterBottom>
            //         PRODUTOS
            //       </Typography>
            //       <Typography variant="h5" component="h2">
            //         {produto.nomeProduto}
            //       </Typography>
            //       <Typography variant="body2" component="p">
            //         {produto.preco}
            //       </Typography>
            //       <Typography variant="body2" component="p">
            //         {produto.categoria?.descricao}
            //       </Typography>
            //     </CardContent>
            //     </Card>
            // </Box>
          ))
        }
                    </Grid>
      </>
      )
}

      export default ListarProdutos;
