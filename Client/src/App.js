import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import HomePage from './pages/HomePage'
import Login from "./pages/Login";
import Registerexample from "./pages/Registerexample";

function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      {/* <HomePage /> */}
      <Registerexample />
    </div>
  );
}

export default App;
