import "./Footer.css";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="FeetLoverContainer">
            <Link to='/' className="foot-logo"><h1>LIKEHOME</h1></Link>
            <p>Find hotels just like home.</p>
            <p>Anytime. Anyplace. Anywhere.</p>
            <p>^w^</p>
            <h1> Feet </h1>
            <div className="Columns">

                <div className="Col1">

                </div>

                <div className="Col2">

                </div>

                <div className="Col3">

                </div>

            </div>
        </div>
    );
}

export default Footer;