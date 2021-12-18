import { createContext,useContext, useEffect, useState  } from "react";
import { fakeAuthApi } from "./fakeAuthAPi";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [isUserlogin, setLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")
    

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
                    "login", JSON.stringify({isUserLoggedIn: true})
                )

            }
        }catch(error){
                setErrorMsg("User not found!")
                
            
            
        }
    }


    return (
        <AuthContext.Provider value={{isUserlogin, loginWithUserCredentials, setLogin, errorMsg}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
}