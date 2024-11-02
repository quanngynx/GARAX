import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Checkbox,
  FormControlLabel,
  Box,
  Link,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ROUTES from '../../api';
import backgroundImage from '../../assets/images/background1.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_ROUTES.LOGIN, { email, password });
      const { token, role, fullname } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('fullname', fullname);
      if (role === 'user') {
        navigate('/home');
      } else {
        window.location.replace('http://localhost:5175/statics');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="sm"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome Back
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" mb={2}>
            Log in to continue to your account
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email address"
              color='success'
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              margin="normal"
              required
              sx={{
                input: { color: '#333', fontWeight: 'bold' },
                '& label.Mui-focused': { color: '#1976d2' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#1976d2' },
                  '&:hover fieldset': { borderColor: '#115293' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
              required
              sx={{
                input: { color: '#333', fontWeight: 'bold' },
                '& label.Mui-focused': { color: '#1976d2' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#1976d2' },
                  '&:hover fieldset': { borderColor: '#115293' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                },
              }}
            />
            {errorMessage && (
              <Typography color="error" sx={{ mt: 1, fontWeight: 'bold' }}>
                {errorMessage}
              </Typography>
            )}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
              sx={{ mt: 2, fontWeight: 'bold' }}
            />
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="info"
                fullWidth
                sx={{ py: 1.5, fontSize: '1rem', fontWeight: 'bold' }}
              >
                Log In
              </Button>
            </Box>
          </form>
          <Typography variant="body2" align="center" mt={2} sx={{ fontWeight: 'bold' }}>
            By continuing, you agree to the Terms of use and Privacy Policy.
          </Typography>
          <Typography align="center" mt={2} sx={{ fontWeight: 'bold' }}>
            <Link href="#" color="primary" underline="hover">
              Forgot your password?
            </Link>
          </Typography>
          <Typography align="center" mt={2} sx={{ fontWeight: 'bold' }}>
            Don’t have an account?{' '}
            <Link href="/auth/register" color="primary" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
