import './footer.css';
import facebook from '../../img/socials/fb.svg'
import instagramm from '../../img/socials/inst.svg'
import twitter from '../../img/socials/tw.svg'
import link from '../../img/socials/in.svg'


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-top">
                        <div className="footer-headline">
                            <h1>fashion</h1>
                            <p>Complete your style with awesome<br />clothes from us.</p>
                        </div>
                        <div className="socials-links">
                            <ul className="socials-item">
                                <li className="item"><a href="#"><img src={facebook} alt="" /></a></li>
                                <li className="item"> <a href="#"><img src={instagramm} alt="" /></a></li>
                                <li className="item"><a href="#"><img src={twitter} alt="" /></a></li>
                                <li className="item"><a href="#"><img src={link} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-nav">
                        <div class="nav-column">
                            <h3>Company</h3>
                            <ul className="nav-items">
                                <li><a href="#" className="nav-item">About</a></li>
                                <li><a href="#" className="nav-item">Contact us</a></li>
                                <li><a href="#" className="nav-item">Support</a></li>
                                <li><a href="#" className="nav-item">Careers</a></li>
                            </ul>
                        </div>
                        <div class="nav-column">
                            <h3>Quick Link</h3>
                            <ul className="nav-items">
                                <li><a href="#" className="nav-item">Share Location</a></li>
                                <li><a href="#" className="nav-item">Orders Tracking</a></li>
                                <li><a href="#" className="nav-item">Size Guide</a></li>
                                <li><a href="#" className="nav-item">FAQs</a></li>
                            </ul>
                        </div>
                        <div class="nav-column">
                            <h3>Legal</h3>
                            <ul className="nav-items">
                                <li><a href="#" className="nav-item">Terms & conditions</a></li>
                                <li><a href="#" className="nav-item">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}