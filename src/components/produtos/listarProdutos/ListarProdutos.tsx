import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListarProdutos.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { red } from '@mui/material/colors';
import { Box } from "@mui/material";
import banner from '../../../assets/img/banner_home.png';
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
    
        <Grid container>
          <Grid alignItems="center" item className='banner_produtos' >
            <Box >
              <Typography variant="h1" gutterBottom color="textPrimary" className="text-decoration-none nameBanner"component="h1" align="center">Produtos</Typography>
              <Link to="/cadastrarProduto">
              <Button className="btn">Cadastrar um novo produto</Button>
              </Link>
            </Box>
          </Grid>
          </Grid>
   
     
      <h1> Nossos Produtos </h1>
      <Grid container spacing={2}>

        {
          produtos.map(produto => (
            <Grid className="card-produtos" item xs={3} key={produto.id}>
              <Card >
                <CardContent>
                  <Box display="flex" flexDirection="row-reverse" >
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <DeleteForeverIcon className="excluir" style={{ color: red[500] }} />
                    </Link>
                    <Link to={`/atualizarProduto/${produto.id}`} className="text-decorator-none">
                      <EditIcon className="edit" />
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <img className="card-foto" src={produto.fotoProduto} />
                  </Box>
                  <Typography color="textSecondary" gutterBottom>
                    {produto.nomeProduto}
                  </Typography>
                  <Typography variant="h5" component="h2" className="preco">
                    R$ {produto.preco},00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="botao1">Adicionar ao carrinho</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default ListarProdutos;
