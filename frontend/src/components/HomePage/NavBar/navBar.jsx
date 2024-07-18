import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css'

function NavBar() {
    return(
            <div className={styles["nav-bar"]}>
                <div className={styles["routes"]}>
                    <ul className={styles["route-list"]}>
                        {/* links need to be updated */}
                        <li><Link className={styles["link-styles"]} to="/homePage">HOME /</Link></li>
                        <li><Link className={styles["link-styles"]}to="/profile">PROFILE /</Link></li>
                        <li><Link className={styles["link-styles"]}to="/favourites">FAVOURITES /</Link></li>
                        <li><Link className={styles["link-styles"]}to="/settings">SETTINGS /</Link></li>
                        <li><Link className={styles["link-styles"]} to ="/logout">LOGOUT /</Link></li>
                    </ul>
                </div>
        </div>
    )
}
export default NavBar;