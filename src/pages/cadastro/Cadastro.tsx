import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, Typography, Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import './Cadastro.css'

export default function Login() {
    return (
        <Grid className="boxForm" container >
            <Grid >
        <Box>
        <form action="">
            <Typography variant='h3' gutterBottom color="textPrimary" component='h3' align='center' style={{fontWeight: 'bold'}}>Login</Typography>
            <TextField id='Nome' label='Nome' variant='outlined' name='Nome' margin='normal' fullWidth></TextField>
            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth></TextField>
            <TextField id='TipoUsuario' label='TipoUsuario' variant='outlined' name='TipoUsuario' margin='normal' fullWidth></TextField>
            <TextField id='Foto' label='foto' variant='outlined' name='Foto' margin='normal' fullWidth></TextField>
            <Button variant="contained" >Cadastar</Button>
        </form>
        </Box>
        </Grid>
      </Grid>
      )
}