import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { HomePage, Login, Registerexample } from './pages';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
      </Routes>
    </div>
  );
}

export default App;
