import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";



export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { formState, email, password, onInputChange } = useForm({
    email:'',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] )

  const onSumbit = ( event ) => {
    event.preventDefault();

    // no es esta la accion a despachar
    dispatch( checkingAuthentication() );

    dispatch( startLoginWithEmailPassword( formState ) )
    // dispatch( startLoginWithEmailPassword( { email, password } ) )
    // console.log({ email, password })
  }

  const onGoogleSingIn = () =>{
    console.log('onGoogleSingIn');

    dispatch( startGoogleSingIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSumbit }>
          <Grid container>
            <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField 
                label = "Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField 
                label = "Password" 
                type="password" 
                placeholder="password"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={ { mb: 2 , mt: 1} }>
              <Grid 
                item 
                xs = { 12 } 
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity="error"> { errorMessage } </Alert>
              </Grid>
              
              <Grid item xs = { 12 } sm={ 6 }>
                <Button 
                  disabled= { isAuthenticating }
                  type="submit" 
                  variant="contained" 
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs = { 12 } sm={ 6 }>
                <Button 
                  disabled={ isAuthenticating }
                  variant="contained" 
                  fullWidth
                  onClick={ onGoogleSingIn } 
                >
                  <Google/>
                  <Typography sx={ { ml: 1 } }> Google </Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear cuenta
              </Link>

            </Grid>

          </Grid>
          
        </form>
    </AuthLayout>
  )
}
