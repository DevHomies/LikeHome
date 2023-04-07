import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations } from './pages';

const App = () => {
  return (
    <div className="App">
      <AccountPage />
      <CurrentReservations />
      <HomePage />
      {/*
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
        <Route path='/account' element={<AccountPage/>} />
      </Routes> 
        */}
    </div>
  );
}

export default App;