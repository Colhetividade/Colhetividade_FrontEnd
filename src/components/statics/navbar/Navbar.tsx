import React from "react";
import { Box } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../assets/img/logobranco.png';
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    const isLoggedIn = token !== '';

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static" className="nav">
                <Toolbar variant="dense" className="toolbarStyle">
                    <Box display="flex" className="nav_links">

                        <Box className="cursor">
                            <img src={logo} alt="logo" />
                        </Box>
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography className="nameTypo" variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/produtos" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography className="nameTypo" variant="h6" color="inherit">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/categoria" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography className="nameTypo" variant="h6" color="inherit">
                                    Categorias
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className="cursor">
                            <Typography className="nameTypo" variant="h6" color="inherit">
                                Plantar Educação
                            </Typography>
                        </Box>
                    </Box>
                    
                    {isLoggedIn ? (
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit" className="logout">
                                Sair
                            </Typography>
                        </Box>
                    ) : null}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;