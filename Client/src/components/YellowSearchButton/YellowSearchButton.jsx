import './YellowSearchButton.css';
import React from 'react';

const YellowSearchButton = () => {
    const [isOpen, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    };

  return (
    <div className='YellowSearchButton'>
    <button type="button"> 
        Search
    </button>

    </div>
    );

}

export default YellowSearchButton;
