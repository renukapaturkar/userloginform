import './App.css';
import {Routes, Route} from "react-router-dom";
import { Login } from './Login/Login';
import { UserProfile } from './Private Pages/UserProfile';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile/>
              </PrivateRoute>
            }
          />
      </Routes>

      
    </div>
  );
}

export default App;
