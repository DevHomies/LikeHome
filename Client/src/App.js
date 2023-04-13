import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Login, Registerexample,CancelReserve } from './pages';
import { Amenities } from './components';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
        <Route path='/cancelReserve' element={<CancelReserve/>} />
      </Routes>
      {/* <Amenities /> */}
    </div>
  );
}

export default App;
