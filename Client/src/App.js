import { Routes, Route } from 'react-router-dom';
import { Amenities } from './components';
import { HomePage, Login, Registerexample, AccountPage, CurrentReservations, DetailsPage, SearchPage, CancelReserve} from './pages';
import { EditReservations } from './components';

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
        <Route path='/search' element={<SearchPage />} />
        {/* <Route path='/details' element={<DetailsPage/>} /> 
        * This will need to be a dynamic route for each hotel
        */}
      </Routes> 
    </div>
  );
}

export default App;
