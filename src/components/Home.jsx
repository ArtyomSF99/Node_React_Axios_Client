import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context";

const Home = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    async function logout() {
        const response = await axios.post(`http://localhost:5000/api/logout`  );
       localStorage.clear()
    }
    return(
        <div className="login">
        <Link to={`/Users`} >
            <button className='myinput'>Пользователи</button>
           </Link>
            <Link to={`/posts`} >
            <button className='myinput'>Посты</button>
           </Link>   
        </div>
    )
}

export default Home;