import { Routes, Route } from 'react-router-dom';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, SearchPage, DetailsPage, PaymentPage} from './pages';
import { EditReservations, CancelReserve, Amenities } from './components';
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
        <Route path='/details' element={<DetailsPage/>} /> 
        <Route path='/pay' element={<PaymentPage />} />

        {/* * This will need to be a dynamic route for each hotel */}
        
      </Routes> 
    </div>
  );
}

export default App;
