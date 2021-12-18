import {Route, useNavigate} from "react-router-dom";

import { useAuth } from "./AuthProvider";

export const PrivateRoute = ({children}) => {
    const isUserlogin = useAuth();
    console.log(isUserlogin, "isUserLogin")
    const navigate = useNavigate();

    if(isUserlogin){
        return children
    }else {
        navigate('/')
    }

}