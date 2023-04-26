import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/search/search.js';
import  PaymentPage from './pages/Payment/payment.jsx';
import { Navbar } from './components';
import { Amenities } from './components';
import { HomePage, Login, Registerexample } from './pages';

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

const nights = 2;

const rewardPoints = 100;

const App = () => {
  return (
    <div className="App">
      <PaymentPage hotel = {hotels[0]} nights = {nights} rewardPoints = {rewardPoints}/> 
      {/* <SearchPage/> */}
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registerexample />} />
      </Routes> */}
      {/* <Amenities /> */}
    </div>
  );
}

export default App;
