import { Button } from "@mui/material";
function login() {
    return ( 
        <div className="h-full w-full p-2">
             <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
            </span>
            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
            <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
            </span>
            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Password" />
            </label>
            
          <div className="w-full  h-[300px]">
            <ButtonLogin ></ButtonLogin>
          </div>
        </div>
     );
}
function ButtonLogin(){
    const handleSubmit = (event) => {
        event.preventDefault(); 
        axios.post('http://localhost:4006/auth/login', {
          username: username,
          password: password
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error:', error.response ? error.response.data : error.message);
          });
      };
    return (
        <button className="w-full h-[50px] bg-slate-200 " onClick={handleSubmit}>
                <span>login</span>
        </button>
    );
}
export default login;