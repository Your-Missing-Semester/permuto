import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className={styles["nav-bar"]}>
            <div className={styles["nav-bar-link"]}>
                {/* TODO: T26: place home link here */}
                <Link to="/"> 
                    HOME
                </Link>
            </div>
            <div className={styles["nav-bar-link"]}>
                {/* TODO: T11: place sign up link here */}
                <Link to="/signup">
                    SIGN UP 
                </Link>
            </div>
            <div className={styles["nav-bar-link"]}>
                {/* TODO: T10: place log in link here */} 
                < Link to="/login">
                    LOG IN
                </Link>
            </div>
            <div className={styles["nav-bar-link"]}>
                {/* TODO: T27: place about link here */}
                < Link to="">
                    ABOUT
                </Link> 
            </div>  
        </div>
    );
}

export default NavBar;
