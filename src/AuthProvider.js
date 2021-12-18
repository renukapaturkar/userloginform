import { createContext,useContext, useEffect, useState  } from "react";
import { fakeAuthApi } from "./fakeAuthAPi";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [isUserlogin, setLogin] = useState(false);

    useEffect(() => {
        const loginStatus = JSON.parse(localStorage?.getItem("login"));
        loginStatus?.isUserLoggedIn && setLogin(true);
    }, [])

    const loginWithUserCredentials = async(email, password) => {
        try {
            const response = await fakeAuthApi(email, password); 
            if(response.success) {
                setLogin(true)
                console.log(isUserlogin)
                localStorage?.setItem(
                    "login", JSON.stringify({isUserLoggedIn: isUserlogin})
                )
            }
        }catch(error){
            console.log("The credentials are incorrect, Please enter correct credentials!", error)
        }
    }


    return (
        <AuthContext.Provider value={{isUserlogin, loginWithUserCredentials}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
}