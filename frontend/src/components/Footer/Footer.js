import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div classname="Left-container">
                <header className="Logo-footer">
                    <img src="" alt="[ LOGO ]" width="30" height="15" />
                </header>

                <div className="Links">
                    <a
                        className="Terms-link"
                        href="https://www.termsfeed.com/terms-conditions-generator/"
                    >
                        Terms of Service|
                    </a>

                    <a
                        className="Privacy-link"
                        href="https://youcanbook.me/blog/privacy-policy-templates-small-businesses"
                    >
                        Privacy Policy
                    </a>    
                </div>

                <p>
                    Copyright @ 2020 Permuto | All Right Reserved
                </p>
            </div>

            <div className="Right-container">
                <div className="Socials">
                    <p>
                        <b>FOLLOW US</b>
                    </p>
                </div>

                <div className="Emails">
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