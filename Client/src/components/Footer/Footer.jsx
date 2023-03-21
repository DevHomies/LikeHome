import "./Footer.css";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="FeetLoverContainer">

            <div className="columns">

                <div className="Col0">
                    <Link to='/HomePage' className="foot-logo"><h1>LIKEHOME</h1></Link>
                    <p>Find hotels just like home.</p>
                    <p>Anytime. Anyplace. Anywhere.</p>
                </div>

                <div className="Col1">
                    <h4>COMPANY</h4>
                     
                        <Link to='/' className='compLink'>About Us</Link>
                    
                        <Link to='/' className='compLink'>Legal Information</Link>
                    
                        <Link to='/' className='compLink'>Blogs</Link>
                    
                </div>

                <div className="Col2">
                <h4>HELP CENTER</h4>
                     
                        <Link to='/' className='HCLink'>Find a Property</Link>
                    
                        <Link to='/' className='HCLink'>How to Host?</Link>
                    
                        <Link to='/' className='HCLink'>Why Us?</Link>
                    
                        <Link to='/' className='HCLink'>FAQs</Link>
                    
                        <Link to='/' className='HCLink'>Rental Guides</Link>
                    
                </div>

                <div className="Col3">
                <h4>CONTACT INFO</h4>
                     
                        <Link to='/' className='CILink'>Phone: (408) 238-4321</Link>
                    
                    {/*Oprah's email*/}
                        <Link to='/' className='CILink'>Email: harpo@interaccess.com</Link>
                    
                        <Link to='/' className='CILink'>Location: 3221 S White Rd, 
                        San Jose, CA 95148</Link>
                    
                        <Link to='/' className='CILink'>SocialMediaLink</Link>
                    
                </div>

            </div>

            <hr ></hr>
            <div className="Copyrights">
                <p>@ {new Date().getFullYear()} DevHomies | 
                        All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;