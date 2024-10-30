import { useNavigate } from "react-router-dom";

export function useCheckAuth(navigate) {
//   const navigate = useNavigate()     ;
//   const checkAuth = () => {
//     const token = localStorage.getItem('token');
//     if (!token || isTokenExpired(token)) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('fullname');
//       navigate('/auth/login');
//     }
//   };


}
export const isTokenExpired = (token) => {
    if (!token) return true;

    const timeEnd = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    return timeEnd.exp < currentTime;
};