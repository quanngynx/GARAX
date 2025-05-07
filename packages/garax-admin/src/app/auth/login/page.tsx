'use client';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useLayoutEffect, useState } from "react";
import { Navigate, useLocation } from 'react-router-dom';

import { authApi } from "@/apis/authUrl";
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectIsAuthenticated, setAccessToken } from '@/stores/slices/authSlice';
import { AppDispatch } from '@/stores';
import { ROOTS } from '@/routes/constants/constants';
import { PATH_AUTH } from '@/routes/paths';
import { Button, message, Spin } from 'antd';

function LoginPage() {
    const router = useRouter();
    const dispatch: AppDispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const [messageApi, contextHolder] = message.useMessage();

    const [loggingIn, setLoggingIn] = useState(false);

    const [isError, setIsError] = useState(false);

    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Đăng nhập thành công!',
        });
    };

    const credentialsAction = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsError(false);
            setLoggingIn(true);
    
            const formData = new FormData(event.currentTarget);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            const response = await authApi.login({ email, password })
    
            const token = response.data.metadata.tokens.accessToken;
            if (response.data.status === 200) {
                success();
                dispatch(setAccessToken(token))
                router.push(ROOTS.DASHBOARD);
                // redirect(callbackUrl ?? ROOTS.DASHBOARD);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setLoggingIn(false);
        }
    }

    // if(isAuthenticated){
    //     redirect(callbackUrl ?? ROOTS.DASHBOARD)
    // }
    
    return (
        <form onSubmit={credentialsAction}>
            {contextHolder}
            {/* <Button onClick={success}>Success</Button> */}
            <div className="w-[580px] rounded-2xl sm:border-spacing-4 bg-gray-50 sm:border-2 p-5">
                <div className="text-[#333333] text-[32px] mb-5 font-semibold">Log in</div>
                <label className="block mb-5">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-[#666666]">
                        Email address
                    </span>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="you@example.com"
                        id="credentials-email" 
                    />
                </label>

                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-[#666666]">
                        Password
                    </span>
                    <input
                        type="password"
                        name="password"
                        className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Enter Password"
                        id="credentials-password"
                    />
                    {/* {errorMessage && <p className="font-semibold text-red-500 ">{errorMessage}</p>} */}
                    {/* <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                      className="text-[#333333]"
                    /> */}

                    {/* <CheckboxCustom label="Remember me" /> */}
                </label>

                <div className="text-[#333333] text-[14px] font-normal">
                    By continuing, you agree to the Terms of use and Privacy Policy.
                </div>
                <div className="w-full mt-4 ">
                    <button
                        className="w-full h-[50px] bg-slate-600 rounded-3xl"
                        type="submit"
                    >
                        {loggingIn ? <><Spin size="small" /><Spin /></> : <></>} <span>Login</span>
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center mt-4">
                    <a className="">
                        <div className="text-[#333333] text-[14px] font-normal underline">
                            Forget your password
                        </div>
                    </a>

                    <div className="text-[#333333] text-[14px] font-normal mt-4">
                        Don’t have an acount?
                        {/* <Link className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500" href="/auth/register"> Sign up</Link> */}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginPage;