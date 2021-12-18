import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthProvider";
import '../App.css';
import { useEffect } from "react";

export const UserProfile = () => {
    const {isUserlogin, setLogin} = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("login", JSON.stringify({ isUserLoggedIn: isUserlogin}))
        setLogin(false)
        
    }
    return(
        <div>
            <h1>Hello Admin!</h1>
            <button className="btn btn-dark btn-dark-hover" onClick={() =>logout()}>Logout</button>

        </div>


    )
}