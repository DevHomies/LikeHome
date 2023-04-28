import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, EditReservations, SearchPage, DetailsPage, PaymentPage} from './pages';

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
        <Route path='/search' element={<SearchPage />} />
        <Route path='/detail/:id' element={<DetailsPage />} />
        <Route path='/pay' element={<PaymentPage />} />
        {/* <Route path='/pay' element={<PaymentPage />} /> */}
      </Routes> 
    </div>
  );
}

export default App;
