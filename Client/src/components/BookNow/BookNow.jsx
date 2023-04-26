
import React from 'react';
import './BookNow.css';
import { Link } from 'react-router-dom';

const BookNow = () => {
    return (
        <Link to='/pay'><button className='book-button'>Book Now </button></Link>
    );
}

export default BookNow;
