import React from 'react';
import styles from './profiles.module.css';
import pfpPlaceholder from '../../Assets/pfpPlaceholder.png';

function UserProfile () {
    return (
        <div className={styles["profile-grid"]}>
            <div className={styles["profile-card"]}>
                <img className={styles["pfp"]}src={pfpPlaceholder} alt={"placeholder"}></img>
                <div className={styles["profile"]}>
                    <h2 className={styles["username"]}>username</h2>
                    <p>skill</p>
                    <p>bio</p>
                    <p>location</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile