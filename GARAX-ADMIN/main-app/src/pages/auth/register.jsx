import React, { useState } from 'react';
import axios from 'axios';
function Register() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:5176/auth/register', { username, password })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <div className="">
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Username
        </span>
        <input
          type="email"
          name="email"
          value={username}
          onChange={(event) => setusername(event.target.value)}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter Username"
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Password
        </span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter Password"
        />
      </label>
      <div className="w-full  h-[300px]">
        <button
          className="w-full h-[50px] bg-slate-200 "
          onClick={handleSubmit}
        >
          <span>register</span>
        </button>
      </div>
    </div>
  );
}

export default Register;
// function ButtonRegister(){
//     app.post('/register', (req, res) => {
//         const {  username, passWord, } = req.body;
//         const hashedPassword = bcrypt.hashSync(passWord, 10);
//         const user = {
//           username,
//           passWord: hashedPassword,
          
//         };
//         db.query('INSERT INTO account SET ?', user, (err, results) => {
//           if (err) {
//             res.status(500).send({ message: 'Lỗi đăng ký' });
//           } else {
//             res.send({ message: 'Đăng ký thành công' });
//           }
//         });
//       });
//     return (
//         <button className="w-full h-[50px] bg-slate-200 ">
//                 <span>register</span>
//         </button>
//     );
// }
