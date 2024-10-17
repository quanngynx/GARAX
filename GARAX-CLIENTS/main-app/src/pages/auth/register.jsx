import React, { useState } from 'react';
import axios from 'axios';
import API_ROUTES from '../../api';
import icongarrax from '../../assets/GRAX.svg';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [confirmpass , setconfirm]= useState('')
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    //lưu vào localStorage
    localStorage.setItem('email', email);

    const handleSubmit = (event) => {
      event.preventDefault(); 
      axios.post(API_ROUTES.REGISTER, {
        email: email,
        password: password,
        confirmpass: confirmpass,
        fullname: fullname,
        phone:  phone
      })
      
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error.response ? error.response.data : error.message);
        });
        if (!email || !fullname || !phone || !password || !confirmpass){
          setErrorMessage('Please fill out all fields.');
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+com+$/;
        if(!emailRegex.test(email)){
            setErrorMessage('Format of email is name@company.com')
        }
        const phoneRegex = /^[0-9]{11}$/; 
        if(phoneRegex.test(phone)){
          setErrorMessage('Phone number is not valid.');
        }
        if (password !== confirmpass) {
          setErrorMessage('Password and confirm password do not match.');
          return;
        }
        navigate('/auth/verify');
    };

  return (
    <section class="bg-gray-50 h-[100%] w-[100%] dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-30 h-30 "
             src={icongarrax} 
             alt="logo"/>  
        </a> */}
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form class="space-y-4 md:space-y-6"
                 action="#">
                    <div>
                        <label for="email" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email"
                         name="email"
                          id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="name@company.com"
                         onChange={(event)=>setEmail(event.target.value)}
                          required=""/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="name"
                         name="email" id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="VD : JACK"
                         onChange={(event)=>setFullname(event.target.value)}
                          required=""/>
                    </div>
                    <div>
                        <label for="Phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                        <input type="phone"
                         name="phone" id="phone" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="0123456789"
                         onChange={(event)=>setPhone(event.target.value)}
                          required=""/>
                    </div>
                    <div>
                        <label for="password" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" 
                        name="password" 
                        id="password"
                         placeholder="••••••••"
                         onChange={(event)=>setPassword(event.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" 
                        name="confirm-password"
                         id="confirm-password" 
                         placeholder="••••••••" 
                         onChange={(event)=>setconfirm(event.target.value)}
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""/>
                    </div>
                    {errorMessage && <p className="text-red-500 font-light">{errorMessage}</p>}
                    
                    <button type="submit" 
                     onClick={handleSubmit}
                    class="w-full text-black border- bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                     
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?
                        <Link to='/auth/login'>
                         <button href="#"  class="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Login here
                        </button>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  );
}

export default Register;
