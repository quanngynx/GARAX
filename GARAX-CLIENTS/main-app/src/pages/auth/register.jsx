import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ROUTES from '../../api';
import backGroundGarax from '../../assets/images/background1.png';

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  localStorage.setItem('email',email);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!email || !fullname || !phone || !password || !confirmpass) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    const response =  await axios.get(API_ROUTES.GETUSER)
     
     const user1 = response.data.map(user =>
      user.email
     );
     // Kiểm tra nếu email đã tồn tại trong danh sách
     if (user1.includes(email)) {
      setErrorMessage('Email already exists.');
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Format of email is name@company.com');
      return;
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage('Phone number is not valid.');
      return;
    }

    if (password !== confirmpass) {
      setErrorMessage('Password and confirm password do not match.');
      return;
    }

     
    try {
    
      await axios.post(API_ROUTES.REGISTER,{
        email,
        password,
        fullname,
        phone,
        
      });
     
      navigate('/auth/verify');
    } catch (error) {
      console.error('Registration error:', error); 
      setErrorMessage(
        error.response ? error.response.data : 'Registration failed'
      );
    }finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        height: '100%',
        overflow: 'block',
      }}
    >
      <Box
        sx={{
          flex: { xs: 'none', md: 0.65 },
          backgroundImage: `url(${backGroundGarax})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: { xs: '40vh', md: '100%' },
          width: { xs: '100%', md: 'auto' }, 
        }}
      />
        <Paper
          elevation={10}
          sx={{
          flex: { xs: 1, md: 0.35 },
          justifyContent:'center',
          alignItems: 'center',
          p: { xs: 2, md: 4 },
          borderRadius: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          width: '100%',
          maxWidth: '100%',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Create an account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Your name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Your phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Confirm password"
              type="password"
              value={confirmpass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
            {errorMessage && (
              <Typography color="error" align="center" mt={2}>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={isSubmitting} 
            >
               {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
          <Typography variant="body2" align="center" mt={2}>
            Already have an account?{' '}
            <Link href="/auth/login" color="primary">
              Login here
            </Link>
          </Typography>
        </Paper>
    </Box>
  );
}

export default Register;
