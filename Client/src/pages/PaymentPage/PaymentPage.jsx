import { useState, useEffect } from 'react';
import { Navbar, Payment ,Footer} from '../../components';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const submitPayment = (e) => {
        setSuccess(e);
    }

    useEffect(() => {
        
        if (success === true) {
            window.scrollTo(0, 0);
            setTimeout(() => {
                navigate('/');
            }, 3000)
        }
    }, [success])

    return (
        <div>
            <Navbar/>
            <Payment parentCallback={submitPayment} />
            { success &&
                <div className='payment-success'>
                    <h1>Payment Successful!</h1>
                    <p>Enjoy your stay!</p>
                </div>
            }
            <Footer/>
        </div>
    );
}

export default PaymentPage;
