import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/search/search.js';
import { Navbar } from './components';
import { Amenities } from './components';
import { HomePage, Login, Registerexample } from './pages';

const App = () => {
  return (
    <div className="App">
      <SearchPage/>
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
      </Routes> */}
      {/* <Amenities /> */}
    </div>
  );
}

export default App;
