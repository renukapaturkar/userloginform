import { useState } from "react";
import { useAuth } from "../AuthProvider";
import { UserProfile } from "../Private Pages/UserProfile";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { isUserlogin, loginWithUserCredentials } = useAuth();

  const passwordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(
    password
  );


  function loginHandler(e) {
      e.preventDefault();
      if(!passwordValid){
          setErrorMessage("Password must be 8-20 characters, must contain letters (upper and lower case), at least 1 number, and 1 special character")
      }else {
        loginWithUserCredentials(email, password);
      }
    
  }




  return (
    <div>
      {isUserlogin ? (
      <UserProfile />
      ): (
      <form onSubmit={loginHandler}>
        <div>User Login</div>
        <div>
          <input placeholder="Email address" type="email"  required onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div>
            <small>{errorMessage}</small>
        </div>


        <div>
          <button >Login</button>
        </div>
      </form>
      )}
    </div>
  );
};
