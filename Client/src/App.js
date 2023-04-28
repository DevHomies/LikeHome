import { Routes, Route } from 'react-router-dom';
import { Amenities } from './components';
import { HomePage, Login, Registerexample, AccountPage, 
        CurrentReservations, EditReservations, SearchPage, DetailsPage, PaymentPage} from './pages';

const hotels = [
  {
    title: "Marriot Hotel",
    address: "123 Marriot St.",
    details: ["Free Wi-Fi", "Pool", "Kitchen", "Spa", "Restaurants"],
    price: 100,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    rating: 1,
  },
  {
    title: "Another Hotel",
    address: "123 Another St.",
    details: ["Free Wi-Fi", "Pool"],
    price: 230,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    rating: 4,
  },
  {
    title: "Pee Hotel",
    address: "123 Peep St.",
    details: ["Free Wi-Fi", "Kitchen"],
    price: 100,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    rating: 4,
  },
  {
    title: "Poop Hotel",
    address: "123 Poop St.",
    details: ["Free Wi-Fi", "Pool", "Kitchen"],
    price: 123,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    rating: 5,
  },
];

const hotel = hotels[0];

const nights = 2;

const rewardPoints = 100;
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
        {/* <Route path='/pay' element={<PaymentTest />} /> */}
        <Route path='/detail' element={<DetailsPage />} />
        <Route path='/pay' element={<PaymentPage />} />
       
        {/* <Route path='/details' element={<DetailsPage/>} /> 
        * This will need to be a dynamic route for each hotel
        */}
      </Routes> 
    </div>
  );
}

export default App;
