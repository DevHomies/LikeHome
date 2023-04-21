import "./Footer.css";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="FeetLoverContainer">

            <div className="footer">

                <div className="left-col single-col">
                    <Link to= '/'><h1>LIKEHOME</h1></Link>
                    <p>Find hotels just like home.</p>
                    <p>Anytime. Anyplace. Anywhere.</p>
                </div>

                <div className="right-col">
                    <div className="single-col">
                        <h4>COMPANY</h4>
                        
                        <p><Link to='/' className='footer-link'>About Us</Link></p>
                    
                        <p><Link to='/' className='footer-link'>Legal Information</Link></p>
                    
                        <p><Link to='/' className='footer-link'>Blogs</Link></p>
                    </div>

                    <div className="single-col">
                        <h4>HELP CENTER</h4>
                        
                        <p><Link to='/' className='footer-link'>Find a Property</Link></p>
                    
                        <p><Link to='/' className='footer-link'>Why Us?</Link></p>
                    
                        <p><Link to='/' className='footer-link'>FAQs</Link></p>
                    
                        <p><Link to='/' className='footer-link'>Rental Guides</Link></p>
                    </div>

                    <div className="single-col">
                        <h4>CONTACT INFO</h4>
                        
                        <p><Link to='/' className='footer-link'>Phone: (408) 238-4321</Link></p>
                        
                        {/*Oprah's email*/}
                        <p><Link to='/' className='footer-link'>Email: harpo@interaccess.com</Link></p>
                        
                        <p><Link to='/' className='footer-link'>Location: 3221 S White Rd, San Jose, CA 95148</Link></p>
                        
                        <p><Link to='/' className='footer-link'>SM links coming soon!</Link></p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="Copyrights">
                <p>@ {new Date().getFullYear()} DevHomies Design | All rights reserved</p>
                <p>CMPE 165 Sec 80 - Hsin Yi Meng</p>
            </div>
        </div>
    );
}

export default Footer;