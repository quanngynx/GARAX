import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Form, FormProps, Input, notification } from 'antd';
import { AccountRegisterRequest } from '@/api/requests/accounts';
import BackGroundGarax from '@/assets/auth/images/background1.webp';
import { authApi } from '@/api/authUrl';

function Register() {
  const navigate = useNavigate();
  const [confirmpass, setConfirmPass] = useState('');
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const [isRegister, setIsRegister] = useState(false);
  const [isError, setIsError] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  
  // localStorage.setItem('email', email);
  
  // const handleRegister = async (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   // if (!email || !userName || !password || !confirmpass) {
  //   //   setErrorMessage('Please fill out all fields.');
  //   //   return;
  //   // }
  //   // const response =  await axios.get(API_ROUTES.GETUSER)
     
  //   //  const user1 = response.data.map((user: { email: string; }) =>
  //   //   user.email
  //   //  );

  //   //  if (user1.includes(email)) {
  //   //   setErrorMessage('Email already exists.');
  //   //   setIsSubmitting(false);
  //   //   return;
  //   // }

  //   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   // if (!emailRegex.test(email)) {
  //   //   setErrorMessage('Format of email is name@company.com');
  //   //   return;
  //   // }

  //   if (password !== confirmpass) {
  //     setErrorMessage('Password and confirm password do not match.');
  //     return;
  //   }
     
  //   try {
  //     await axios.post(API_ROUTES.REGISTER,{
  //       userName,
  //       email,
  //       password,
  //     });
  //     navigate('/auth/verify');
  //   } catch (error) {
  //     console.error('Registration error:', error); 
  //     setErrorMessage('Registration failed');
  //   } finally {
  //     // setIsSubmitting(false); 
  //   }
  // };

  const handleRegisterV2: FormProps<AccountRegisterRequest>['onFinish'] 
  = async (data: AccountRegisterRequest) => {
    try {
      setIsError(false);
      setIsRegister(true);

      if (data.password !== confirmpass) {
        openNotification(true, `Mật khẩu và xác nhận mật khẩu không khớp!`);
        return;
      }

      const response = await authApi.register(
        data,
      );

      if (!response) return;
      openNotification(false, `Đăng kí thành công`);
      navigate('/auth/login');
    } catch (error) {
      console.error('ERROR LOGIN:', error);
      openNotification(true, `Đăng nhập thất bại:: ${error} \n ${isError}`)
      setIsError(true);
    } finally {
      setIsRegister(false);
    }
  }

  const openNotification = (pauseOnHover: boolean, message: string) => () => {
    api.open({
      message: message,
      // description: '',
      showProgress: true,
      pauseOnHover,
    });
  };

  const onFinishFailed: FormProps<AccountRegisterRequest>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openNotification(true, 'Đăng nhập thất bại');
  };

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: { xs: 'column', md: 'row' },
    //     width: '100%',
    //     height: '100%',
    //     overflow: 'block',
    //   }}
    // >
    //   <Box
    //     sx={{
    //       flex: { xs: 'none', md: 0.65 },
    //       backgroundImage: `url(${BackGroundGarax})`,
    //       backgroundSize: 'cover',
    //       backgroundRepeat: 'no-repeat',
    //       backgroundPosition: 'center',
    //       height: { xs: '40vh', md: '100%' },
    //       width: { xs: '100%', md: 'auto' }, 
    //     }}
    //   />
    //     <Paper
    //       elevation={12}
    //       sx={{
    //       flex: { xs: 1, md: 0.35 },
    //       justifyContent:'center',
    //       alignItems: 'center',
    //       p: { xs: 2, md: 4 },
    //       borderRadius: 0,
    //       backgroundColor: 'rgba(255, 255, 255, 0.85)',
    //       width: '100%',
    //       maxWidth: '100%',
    //       }}
    //     >
    //       <Typography variant="h4" component="h1" gutterBottom align="center" fontWeight={'600'}>
    //         Đăng kí
    //       </Typography>
    //       <form onSubmit={handleSubmit}>
    //         <div className='flex justify-between items-center'>
    //         <TextField
    //           margin="normal"
    //           label="Tên người dùng"
    //           value={userName}
    //           onChange={(e) => setUsername(e.target.value)}
    //           required
    //         />
    //         <TextField
    //           margin="normal"
    //           label="Địa chỉ email"
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           autoComplete="email"
    //           required
    //         />
    //         </div>
    //         <TextField
    //           fullWidth
    //           margin="normal"
    //           label="Password"
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //         <TextField
    //           fullWidth
    //           margin="normal"
    //           label="Confirm password"
    //           type="password"
    //           value={confirmpass}
    //           onChange={(e) => setConfirmPass(e.target.value)}
    //           required
    //         />
    //         {errorMessage && (
    //           <Typography color="error" align="center" mt={2}>
    //             {errorMessage}
    //           </Typography>
    //         )}
    //         <FormControlLabel required control={<Checkbox />} label="Bạn đã đọc và đồng ý với các điều khoản dịch vụ và chính sách quyền riêng tư của chúng tôi" />
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           color="primary"
    //           sx={{ mt: 2 }}
    //           disabled={isSubmitting} 
    //         >
    //            {isSubmitting ? 'Creating Account...' : 'Create Account'}
    //         </Button>
    //       </form>
    //       <Typography variant="body2" align="center" mt={2}>
    //         Đã có tài khoản?{' '}
    //         <Link href="/auth/login" color="primary">
    //           Đăng nhập ở đây
    //         </Link>
    //       </Typography>
    //     </Paper>
    // </Box>
    <Flex
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100%',
        backgroundImage: `url(${BackGroundGarax})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {contextHolder} 
      <Flex
        align="start"
        vertical
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px 0 rgba(27, 0, 37, 0.89)',
          borderRadius: '10px',
          padding: '32px 24px 12px 24px'
        }}
      >
        <Form
          name="basic"
          layout='vertical'
          labelCol={{ span: 48 }}
          style={{ maxWidth: 800 }}
          initialValues={{ remember: true }}
          onFinish={handleRegisterV2}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<AccountRegisterRequest>
            style={{
              width: 580
            }}
            required tooltip="Đây là trường bắt buộc"
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<AccountRegisterRequest>
            style={{
              width: 580
            }}
            required tooltip="Đây là trường bắt buộc"
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            style={{
              width: 580
            }}
            required tooltip="Đây là trường bắt buộc"
            label="Xác nhận mật khẩu"
            name="confirmpass"
            rules={[{ required: true, message: 'Please input your confirm password!' }]}
          >
             <Input.Password value={confirmpass} onChange={(e) => setConfirmPass(e.target.value)} />
          </Form.Item>
            {/* <TextField
              fullWidth
              margin="normal"
              label="Confirm password"
              type="password"
              value={confirmpass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            /> */}
          <Form.Item
            style={{}}
            label="Bằng cách tiếp tục, you agree to the Terms of use and Privacy Policy."
          >
            <Button
              style={{
                width: '100%',
                borderRadius: 60,
                backgroundColor: '#050B20',
                padding: '20px 0px'
              }}
              type="primary"
              htmlType="submit"
              loading={isRegister}
            >
              {isRegister ? 'Đang tạo...' : 'Đăng kí'}
            </Button>
          </Form.Item>

          <Form.Item
            style={{}}
          >
            <div className='w-full flex justify-center underline font-semibold'>
              Quên mật khẩu?
            </div>
          </Form.Item>

          <Form.Item>
            <div className='w-full flex justify-center gap-1'>
              <div>
                Không có tài khoản?
              </div>

              <div className='underline font-semibold'>
                Đăng kí tại đây
              </div>
            </div>
          </Form.Item>

          <Form.Item>
            <div className='w-full flex justify-center gap-1'>
              <div></div>
              <div className='underline font-semibold'>
                Hoặc tiếp tục với...
              </div>
              <div></div>
            </div>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}

export default Register;
