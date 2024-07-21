import React from 'react';
import styles from './profiles.module.css';
import pfpPlaceholder from '../../Assets/pfpPlaceholder.png';
import locationIcon from '../../Assets/locationIcon.png'

function UserProfile (user) {
    return (
        <div className={styles["profile-grid"]}>
            <div className={styles["profile-card"]}>
                <img className={styles["pfp"]}src={pfpPlaceholder} alt={"placeholder"}></img>
                <div>
                    {/* placed xxx: placeholders to see how it'd look*/}
                    <div className={styles["row1"]}>
                        <h2 className={styles["username"]}>Name:sdfgsdfgdsdfgsdfgasdf {user.firstName} {user.lastName}</h2>
                        <div className={styles["user-details"]}>
                            <p>[staricon]</p>
                            <p> 5.0/5.0</p>
                            <p>[book]</p>
                            <p>[pin]</p>
                        </div>
                    </div>
                    <h3 className={styles["skills"]}>skills: {user.skills}</h3>
                    <p className={styles["bio"]}>bio: {user.bio}</p>
                    <div className={styles["row2"]}>
                        <img className={styles["location-icon"]}src={locationIcon} alt={"location"}></img>
                        <p className={styles["location"]}>Location: {user.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile