import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Amenities } from './components';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, EditReservations, CancelReserve} from './pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
        <Route path='/cancelReserve' element={<CancelReserve/>} />
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/UserReservations' element={<CurrentReservations/>} />
        <Route path='/EditReservations' element={<EditReservations/>} />
      </Routes> 
    </div>
  );
}

export default App;
