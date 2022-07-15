import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box , TextField, FormControlLabel, Button, Checkbox} from '@mui/material'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signInWithEmailAndPassword(auth,data.get('email'),data.get('password'))
    .then(userCredential =>{
      const user = userCredential.user;
      navigate('/')
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
    
  };

  return (
    <Box 
    sx={{
      backgroundColor:'#0a4178',
      width:'100%',
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
      }}>
      <Container maxWidth="xs" >
        <Box 
        sx={{
          backgroundColor:'white',
          borderRadius:3,
          width:'23rem',
          height:'auto',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          p:1
          }}>
          <Typography variant="h5" color="initial">Login</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ p: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    
  )
}

export default Login