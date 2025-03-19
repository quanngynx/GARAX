import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Form, FormProps, Input, notification } from 'antd';

import backgroundImage from '../../../public/gfcu2jnjinvtyfffq4yl.webp';
import { AppDispatch } from '@/redux/stores';
import { useAppDispatch } from '@/redux/hooks';
import { setAccessToken } from '@/redux/slices';
import { authApi } from '@/api/authUrl';
import { AccountLoginRequest } from '@/api/requests';

function Login() {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { state } = useLocation();

  const [loggingIn, setLoggingIn] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const [isError, setIsError] = useState(false);

  // const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleLogin: FormProps<AccountLoginRequest>['onFinish'] = async (data: AccountLoginRequest) => {
    try {
      setIsError(false);
      setLoggingIn(true);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await authApi.login(
        data,
      );

      // if(!isError) {
      //   openNotification(false, 'Đăng nhập thành công');
      // } else {
      //   openNotification(true, 'Đăng nhập thất bại');
      // }

      console.log('t::', response);
      if (!response) return;

      dispatch(setAccessToken(response.metadata.tokens.accessToken));
      navigate('/');
    } catch (error) {
      // console.error('ERROR LOGIN:', error);
      openNotification(true, `Đăng nhập thất bại:: ${error} \n ${isError}`)
      setIsError(true);
    } finally {
      setLoggingIn(false);
    }
  }

  // if (isAuthenticated) {
  //   return <Navigate to={state?.pathname ?? ''} />;
  // }

  const onFinishFailed: FormProps<AccountLoginRequest>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openNotification(true, 'Đăng nhập thất bại');
  };

  const openNotification = (pauseOnHover: boolean, message: string) => () => {
    api.open({
      message: message,
      // description: '',
      showProgress: true,
      pauseOnHover,
    });
  };

  return (
    <Flex
      style={{
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
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<AccountLoginRequest>
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

          <Form.Item<AccountLoginRequest>
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

          {/* <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox>Nhớ thông tin sau khi đăng nhập</Checkbox>
          </Form.Item> */}

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
              loading={loggingIn}
            >
              Đăng nhập
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

export default Login;
