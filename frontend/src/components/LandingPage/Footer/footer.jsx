import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles["left-container"]}>
                <div className={styles.logo}>
                    <img src="" alt="App logo" width="80" height="30" />
                </div>

                <div className={styles.links}>
                    <a
                        className={styles["terms-link"]}
                        // TODO T28: place Terms of Service link
                        href="replace"
                    >
                        Terms of Service|
                    </a>

                    <a
                        className={styles["Privacy-link"]}
                        // TODO T29: place Privacy Policy link 
                        href="replace"
                    >
                        Privacy Policy
                    </a>    
                </div>

                <p className={styles.copyright}>
                    Copyright @ 2020 Permuto | All Right Reserved
                </p>
            </div>

            <div className={styles["right-container"]}>
                <div className={styles.socials}>
                    <p>
                        <b>FOLLOW US</b>
                    </p>

                    <a
                        className={styles.instagram}
                        // TODO T30: place instagram link
                        href="replace"
                    >
                        <img src="" alt="instagram logo "></img>
                    </a>

                    <a
                        className={styles.facebook}
                        // TODO T30: place facebook link
                        href="replace"
                    >
                        <img src="" alt="facebook logo "></img>
                    </a>

                    <a
                        className={styles.X}
                        // TODO T30: place X link
                        href="replace"
                    >
                        <img src="" alt="X logo "></img>
                    </a>
                </div>

                <div className={styles.emails}>
                    {/* TODO T31: place correct email */}
                    <p>
                        Business Inquiries help@permuto.com
                    </p>
                </div>
                <div className={styles.emails}>
                    <p>
                        Customer Supprt help@permuto.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
