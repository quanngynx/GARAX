import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Link,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ROUTES from '@/api';
import BackGroundGarax from '@/assets/auth/images/background1.png';

function Register() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  localStorage.setItem('email', email);
  
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!email || !userName || !password || !confirmpass) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    const response =  await axios.get(API_ROUTES.GETUSER)
     
     const user1 = response.data.map((user: { email: string; }) =>
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

    if (password !== confirmpass) {
      setErrorMessage('Password and confirm password do not match.');
      return;
    }
     
    try {
      await axios.post(API_ROUTES.REGISTER,{
        userName,
        email,
        password,
      });
      navigate('/auth/verify');
    } catch (error) {
      console.error('Registration error:', error); 
      setErrorMessage('Registration failed');
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
          backgroundImage: `url(${BackGroundGarax})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: { xs: '40vh', md: '100%' },
          width: { xs: '100%', md: 'auto' }, 
        }}
      />
        <Paper
          elevation={12}
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
          <Typography variant="h4" component="h1" gutterBottom align="center" fontWeight={'600'}>
            Đăng kí
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-between items-center'>
            <TextField
              margin="normal"
              label="Tên người dùng"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              label="Địa chỉ email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            </div>
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
            <FormControlLabel required control={<Checkbox />} label="Bạn đã đọc và đồng ý với các điều khoản dịch vụ và chính sách quyền riêng tư của chúng tôi" />
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
            Đã có tài khoản?{' '}
            <Link href="/auth/login" color="primary">
              Đăng nhập ở đây
            </Link>
          </Typography>
        </Paper>
    </Box>
  );
}

export default Register;
