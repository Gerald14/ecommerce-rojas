import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import LoginForm from './components/LoginForm';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#0a4178',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 3,
            width: '23rem',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
          }}
        >
          <Typography variant="h5" color="initial">Login</Typography>
          <LoginForm handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </Box>

  );
}

export default Login;
