import { useState } from "react";
import { useAuth } from "../AuthProvider";
import { UserProfile } from "../Private Pages/UserProfile";
import "./Login.css";
import "../App.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { isUserlogin, loginWithUserCredentials, errorMsg } = useAuth();

  const passwordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(
    password
  );

  async function loginHandler(e) {
    e.preventDefault();
    if (!passwordValid) {
      return setErrorMessage(
        "Password must be 8-20 characters, must contain letters (upper and lower case), at least 1 number, and 1 special character"
      );
    } else {
      loginWithUserCredentials(email, password);
      setErrorMessage(errorMsg);
    }
  }

  return (
    <div>
      {isUserlogin ? (
        <UserProfile />
      ) : (
        <form onSubmit={loginHandler} className="form-container">
          <h1>User Login</h1>
          <div className="form-input">
            <input
              placeholder="Email address"
              type="email"
              className="input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-input">
            <input
              placeholder="Password"
              type="password"
              className="input"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <small>{errorMessage}</small>
          </div>

          <div>
            <button className="btn btn-dark">Login</button>
          </div>
        </form>
      )}
    </div>
  );
};
