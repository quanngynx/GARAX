"use client";
import { AccountLoginRequest } from "@/apis/requests";
import { Boxes } from "@/components/backgrounds";
import { Button, Flex, Form, Input } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start backdrop-blur-none bg-white/95 rounded-xl">
                <Flex
                    align="start"
                    vertical
                    style={{
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px 0 rgba(27, 0, 37, 0.89)',
                        padding: '32px 24px 12px 24px'
                    }}
                >
                    <div className='w-full text-4xl flex justify-center font-bold text-black'>
                        Đăng nhập
                    </div>
                    <Form
                        name="basic"
                        layout='vertical'
                        labelCol={{ span: 48 }}
                        style={{ maxWidth: 800 }}
                        initialValues={{ remember: true }}
                        //   onFinish={handleLogin}
                        //   onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<AccountLoginRequest>
                            style={{
                                width: 580,
                                fontWeight: 700
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
                                width: 580,
                                fontWeight: 700
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
                            style={{
                                fontWeight: 700
                            }}
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
                                //   loading={loggingIn}
                                onClick={() => {
                                    router.push('/dashboard')
                                }}
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
            </div>
        </div>
    );
}
