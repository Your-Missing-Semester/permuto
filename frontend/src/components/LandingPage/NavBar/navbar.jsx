import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className={styles["nav-bar"]}>
            <div className={styles["nav-bar-links"]}>
                {/* TODO: T26: place home link here */}
                <Link to="/"> 
                    HOME
                </Link>

                {/* TODO: T11: place sign up link here */}
                <Link to="/signup">
                    SIGN UP 
                </Link>
                
                {/* TODO: T10: place log in link here */} 
                < Link to="/login">
                    LOG IN
                </Link>
                
                {/* TODO: T27: place about link here */}
                < Link to="">
                    ABOUT
                </Link>   
            </div>
        </div>
    );
}

export default NavBar;
