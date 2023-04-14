import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, EditReservations} from './pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/UserReservations' element={<CurrentReservations/>} />
        <Route path='/EditReservations' element={<EditReservations/>} />
      </Routes> 
    </div>
  );
}

export default App;