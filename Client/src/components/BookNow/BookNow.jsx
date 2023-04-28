
import React from 'react';
import './BookNow.css';

const BookNow = ({parentCallback}) => {
    const handleClick = () => {
        parentCallback();
    }

    return (
        <button className='book-button' onClick={handleClick}>Book Now </button>
    );
}

export default BookNow;
