import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, EditReservations, DetailsPage } from './pages';

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
        {/* <Route path='/details' element={<DetailsPage/>} /> 
        * This will need to be a dynamic route for each hotel
        */}
      </Routes> 
    </div>
  );
}

export default App;