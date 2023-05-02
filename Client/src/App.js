import { Routes, Route } from 'react-router-dom';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, SearchPage, DetailsPage, PaymentPage} from './pages';
import { SearchBar } from './components'
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
        {/* <Route path='/search' element={<SearchBar />} /> */}
        <Route path='/detail/:id' element={<DetailsPage />} />
        <Route path='/pay' element={<PaymentPage />} />
        {/* <Route path='/pay' element={<PaymentPage />} /> */}
      </Routes> 
    </div>
  );
}

export default App;
