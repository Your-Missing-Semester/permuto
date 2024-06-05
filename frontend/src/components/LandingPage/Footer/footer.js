import './footer.scss';
import { Logo } from '../../index';

function Footer() {
    return (
        <div className="footer">
            <div className="left-container">
                <header className="logo">
                    <Logo />
                </header>

                <div className="links">
                    <a
                        className="terms-link"
                        // TODO T28: place Terms of Service link
                        href="replace"
                    >
                        Terms of Service|
                    </a>

                    <a
                        className="Privacy-link"
                        // TODO T29: place Privacy Policy link 
                        href="replace"
                    >
                        Privacy Policy
                    </a>    
                </div>

                <p>
                    Copyright @ 2020 Permuto | All Right Reserved
                </p>
            </div>

            <div className="right-container">
                <div className="socials">
                    <p>
                        <b>FOLLOW US</b>
                    </p>

                    <a
                        className="instagram"
                        // TODO T30: place instagram link
                        href="replace"
                    >
                        <img src="" alt="instagram logo"></img>
                    </a>

                    <a
                        className="facebook"
                        // TODO T30: place facebook link
                        href="replace"
                    >
                        <img src="" alt="facebook logo"></img>
                    </a>

                    <a
                        className="X"
                        // TODO T30: place X link
                        href="replace"
                    >
                        <img src="" alt="X logo"></img>
                    </a>
                </div>

                <div className="emails">
                    {/* TODO T31: place correct email */}
                    <p>
                        Business Inquiries help@permuto.com
                    </p>

                    <p>
                        Customer Supprt help@permuto.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
