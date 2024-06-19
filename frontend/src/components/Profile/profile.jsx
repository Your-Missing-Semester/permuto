import React from 'react';
import styles from './profile.module.css';
import NavBar from '../LandingPage/NavBar/navbar';

function Profile() {
    return (
        <div className={styles["profile-page"]}>
            <div className={styles["nav-bar"]}>
                <div className={styles["logo"]}>
                    <img src="" alt="App logo" />
                </div>
                <NavBar />
            </div>

            <div className={styles["profile-details"]}>
                <div className={styles["profile"]}>
                    <div className={styles["profile-pic"]}>
                        <img src="" alt="User Profile"/>
                    </div>

                    <div className={styles["user-name"]}>
                        <p> First Name Last Initial </p>
                    </div>
                </div>

                <div className={styles["user-info"]}>
                    <div className={styles["status"]}>
                        <div className={styles["status-header"]}> 
                            <h2> Current Status </h2>
                        </div>

                        <div className={styles["status-description"]}> 
                            <div className={styles["text"]}>
                                <p> Description of current wants and needs of user </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["info"]}>
                        <div className={styles["contact"]}>
                            <button className={styles["contact-button"]}>
                                contact
                            </button>
                        </div>

                        <div className={styles["reviews"]}>
                            <p> Reviews </p>
                        </div>

                        <div className={styles["location"]}>
                            <p> General Location </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["skills"]}>
                <div className={styles["skills-detail"]}>
                    <div className={styles["skills-header"]}>
                        <h2> Skills </h2>
                    </div>

                    <div className={styles["mini-skills-info"]}>
                        <div className={styles["skill-name"]}>
                            <p> Skill Name </p>
                        </div>

                        <div className={styles["years-of-experience"]}>
                            <p> # years </p>
                        </div>
                    </div>
                </div>

                <div className={styles["proof-of-skills"]}>
                    <div className={styles["proof-header"]}>
                        <h2> Proof of Skills </h2>
                    </div>

                    <div className={styles["proof-info"]}>
                        <div className={styles["skill"]}>
                            <p> Skill: </p>
                        </div>

                        <div className={styles["images-and-description"]}>
                            <div className={styles["proof-image"]}>
                                <img src="" alt="User Skill" />
                            </div>

                            <div  className={styles["skill-description"]}>
                                <p> User description of skill experience here </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;
