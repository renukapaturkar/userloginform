import './App.css';
import {Routes, Route} from "react-router-dom";
import { Login } from './Login/Login';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
