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
            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {/* <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol className="list-inside list-decimal text-sm text-center text-white sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2 z-50">
                        Get started by editing{" "}
                        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold ">
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li className="z-50">Save and see your changes instantly.</li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row z-50">
                    <a
                        className="hover:text-black rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Visit now
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#f2f2f2] text-white hover:text-black hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read our docs
                    </a>
                </div> */}
                <Flex
                    align="start"
                    vertical
                    style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        boxShadow: '0 8px 32px 0 rgba(27, 0, 37, 0.89)',
                        borderRadius: '10px',
                        padding: '32px 24px 12px 24px'
                    }}
                >
                    <div className='w-full text-4xl flex justify-center font-semibold text-black'>
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
