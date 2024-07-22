import React from 'react';
import styles from './profiles.module.css';
import pfpPlaceholder from '../../Assets/pfpPlaceholder.png';
import locationIcon from '../../Assets/locationIcon.png'
import { Link } from 'react-router-dom';

function UserProfile (user) {
    return (
        <div className={styles["profile-grid"]}>
            <div className={styles["profile-card"]}>
                <img className={styles["pfp"]}src={pfpPlaceholder} alt={"placeholder"}></img>
                <div className={styles["card-info"]}>
                    <div className={styles["row1"]}>
                        {/* need to set char limits for name, bio, skill*/}
                        <Link className={styles["username"]} to={user.profilePage}> 
                           Name: {user.firstName} {user.lastName}</Link>
                        <div className={styles["user-details"]}>
                            <p>[star]</p>
                            <p> {user.rating}XX/5.0</p>
                            <p>[book]</p>
                            <p>[pin]</p>
                        </div>
                    </div>
                    <h3 className={styles["skills"]}>skills: sdfjlghsldfkjg hsldfkjghsdlkjfghsdlkfjghsdflkjghsdfklghsdflkghsdflkjghsdfk lghsdlkfjghsdlkjfgh {user.skills}</h3>
                    <h3 className={styles["bio"]}>bio: {user.bio}</h3>
                    <div className={styles["row2"]}>
                        <img className={styles["location-icon"]}src={locationIcon} alt={"location"}></img>
                        <h3 className={styles["location"]}>Location:{user.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;