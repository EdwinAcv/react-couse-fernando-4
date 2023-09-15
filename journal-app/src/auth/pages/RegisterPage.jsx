import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email:'edwin@google.com',
  password: '12345',
  displayName: 'Edwin acevedo'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo de tener una @' ],
  password: [ (value) => value.length >= 6, 'El password de incluir mas de 6 letras' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

  const { displayName,email, password, onInputChange, formState, 
    isFormValid, deiplayNameValid, emailValid, passwordValid 
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField 
                label = "Nombre Completo" 
                type="text" 
                placeholder="Nombre Completo"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !deiplayNameValide }
                helperText={ deiplayNameValid }
              />
            </Grid>

            <Grid item xs = { 12 } sx = {{ mt: 2 }}>
              <TextField 
                label = "Correo" 
                type="email" 
                placeholder="Corrego@google.com"
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
              <Grid item xs = { 12 } >
                <Button 
                  type="submit"
                  variant="contained" 
                  fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
              
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={ { mr: 1 } }>Ya tiene cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Ingresar
              </Link>

            </Grid>
            

          </Grid>
          
        </form>
    </AuthLayout>
  )
}
