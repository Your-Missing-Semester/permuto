import React, {useState} from 'react';
import styles from './profile.module.css';

const Profile = () => {
    // isEditing is false, setIsEditing is a function that updates the value of 'isEditing'
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className={styles["edit-or-view"]}>
            {isEditing ? (
                <ProfileEdit toggleEdit={toggleEdit}/>
            ) : (
                <ProfileView toggleEdit={toggleEdit}/>
            )}
        </div>
    );
};
    
// copy johnny's code
const ProfileView = (toggleEdit) => {
    <div className={styles["profile-view-page"]}>
        <div className={styles["profile-view-details"]}>
            <div className={styles["profile-view-pic"]}>
                <img src="" alt="Self Profile"/>
            </div>

            <div className>
            </div>
        </div>

        <div className={styles["copy-or-edit"]}>
        </div>
    </div>
};

const ProfileEdit = (toggleEdit) => {
};

export default Profile;
