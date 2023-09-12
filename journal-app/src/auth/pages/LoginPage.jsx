import { Grid, TextField, Typography } from "@mui/material"



export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx = { { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4} }
    >

      <Grid
        className="box-shadow"
        xs = { 3 }
        sx = { { backgroundColor: 'white', padding: 3, borderRadius: 2 } }
      >
        <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
      
        <form action="">
          <Grid container>
          <Grid item xs = { 12 } sx = {{ mt: 2 }}>
            <TextField 
              label = "Correo" 
              type="email" 
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs = { 12 } sx = {{ mt: 2 }}>
            <TextField 
              label = "Password" 
              type="password" 
              placeholder="password"
              fullWidth
            />
          </Grid>
          </Grid>
          
        </form>
      </Grid>

    </Grid>
  )
}
