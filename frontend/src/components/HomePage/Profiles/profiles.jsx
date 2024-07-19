import React from 'react';
import styles from './profiles.module.css';
import pfpPlaceholder from '../../Assets/pfpPlaceholder.png';
import locationIcon from '../../Assets/locationIcon.png'

function UserProfile () {
    return (
        <div className={styles["profile-grid"]}>
            <div className={styles["profile-card"]}>
                <img className={styles["pfp"]}src={pfpPlaceholder} alt={"placeholder"}></img>
                <div>
                    <div className={styles["row1"]}>
                        <h2 className={styles["username"]}>YyzzgU LpOq</h2>
                        <p>[staricon]</p>
                        <p> 5.0/5.0</p>
                        <p>[book]</p>
                        <p>[pin]</p>
                    </div>
                    <h3 className={styles["skills"]}>skill</h3>
                    <p className={styles["bio"]}>Bio: AaYyGgLK</p>
                    <div className={styles["row2"]}>
                        <img className={styles["location-icon"]}src={locationIcon} alt={"location"}></img>
                        <p className={styles["location"]}>Location-Gghjkly</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile