import { Routes, Route } from 'react-router-dom';
import { Amenities } from './components';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, PaymentTest, DetailsPage, SearchPage } from './pages';
import { EditReservations, CancelReserve } from './components';
import './App.css';

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
        <Route path='/CancelReservations' element={<CancelReserve/>}/>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/pay' element={<PaymentTest />} />
        <Route path='/detail' element={<DetailsPage />} />
       
        {/* <Route path='/details' element={<DetailsPage/>} /> 
        * This will need to be a dynamic route for each hotel
        */}
      </Routes> 
    </div>
  );
}

export default App;
