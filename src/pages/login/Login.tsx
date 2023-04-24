
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardContent';
import CardContent from '@mui/material/CardActions';
import { Grid, Typography, Button, } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css'
function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        tipoUsuario: "",
        token: ""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso')
        }
        catch (error) {
            alert('Dados do usuário estão inconsistentes')
        }

    }

    return (
        <Grid container className='cardStyle'>
            <Box className='cardStyle'>
                <img className='logo' src="/logo.png" alt="" />
                <Typography variant='h4' gutterBottom color="textPrimary" component='h4' align='center' style={{ fontWeight: 'bold' }}>Login</Typography>
                <Card className='curvaBorda color card' sx={{ minWidth: 500, minHeight: 500}}  >
                    <CardContent>
                        <form className='card2' onSubmit={logar}>
                            <TextField className='formText curvaBorda' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                            <TextField className='formText curvaBorda' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                            <Box className='center'>
                                <CardActions>
                                    <Button className='botao' variant="contained" type='submit'>Login</Button>
                                </CardActions>
                            </Box>
                        </form>
                    </CardContent>
                </Card >
                <Box className='cadastreSe'>
                    <p>Não tem uma conta?</p>
                    <Link to='/cadastro'>
                        <Button className='botao2'>Cadastre-se</Button>
                    </Link>
                </Box>
            </Box>
        </Grid>
    )
}


export default Login;

