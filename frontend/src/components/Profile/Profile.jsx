import React, { useEffect, useRef, useState } from 'react';
import styles from './profile.module.css';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Modal from '../Modal/Modal'
import { HiArrowUpTray } from "react-icons/hi2";

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
const ProfileView = ({ toggleEdit }) => {
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

const ProfileEdit = ({ toggleEdit }) => {
    // name
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // location
    const [location, setLocation] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    // default profile pic
    const avatarUrl = useRef(
        "https://images2.alphacoders.com/130/1305995.png"
    );

    const updateAvatar = (imgSrc) => {
        avatarUrl.current = imgSrc
    }

    const [modalOpen, setModalOpen] = useState(false)

    const mountElement = document.getElementById("overlays");

    // bio
    const [bio, setBio] = useState('');
    const MAX_TEXT_LENGTH = 500;
    const handleBioChange = (e) => {
        const value = e.target.value;
        if (value.length <= MAX_TEXT_LENGTH) {
            setBio(value);
        };
        setBio(e.target.value);
    };

    // rate
    const [rate, setRate] = useState('');

    const handleRateChange = (e) => {
        setRate(e.target.value);
    };

    // tags
    const [tag, setTag] = useState([]);

    const handleTagChange = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            setTag([...tag, e.target.value])
            e.target.value = "";
        };
    };

    const removeTag = (index) => {
        setTag(tag.filter((e1, i) => i !== index))
    };

    // card flip
    const [isFlipped, setIsFlipped] = useState(false)

    const handleProfileSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', name);
        formData.append('location', location);
        // formData.append('pfp', pfp);
        formData.append('bio', bio);
        formData.append('rate', rate);
        formData.append('tag', tag);

        console.info("Profile Summary Updated.")
    };

    const handleSkillSubmit = async (e) => {
        e.preventDefault();

        console.info("Skill Updated")
    };

    return (
        <div className={styles["profile-edit-page"]}>
            {/* left side */}
            <div className={styles["edit-profile-summary"]}>
                <div className={styles["back-button-comp"]}> 
                    <button className={styles["back-symbol"]}> ⟻ </button>
                </div>

                <form onSubmit={handleProfileSubmit} className={styles["profile-form"]}>
                    <div className={styles["img-comp"]}>
                        <div className={styles["square-img"]}>
                            <img
                                className={styles["default-pfp"]}
                                src={avatarUrl.current}
                                alt="Avatar"
                            />
                        </div>
                        <div className={styles["change-photo-comp"]}>
                            <button className={styles["change-photo-button"]} onClick={() => setModalOpen(true)}>
                                <HiArrowUpTray />
                            </button>
                            {modalOpen && <Modal updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} />}
                        </div>
                    </div>

                    <div className={styles["input-profile-summary-info"]}>
                        <label className={styles["profile-summary-label"]}> Profile Summary </label>
                        <div className={styles["name-and-location-comp"]}>
                            <div className={styles["name-comp"]}>
                                <label className={styles["profile-label"]}> NAME </label>
                                <input 
                                    className={styles["input-text"]}
                                    type="text" 
                                    id="name" 
                                    onChange={handleNameChange} 
                                    placeholder="text" 
                                    autoComplete="on"
                                />
                            </div> 
                            <div className={styles["location-comp"]}>
                                <label className={styles["profile-label"]}> GENERAL LOCATION </label>
                                <input 
                                    className={styles["input-text"]}
                                    type="text" 
                                    id="location" 
                                    onChange={handleLocationChange} 
                                    placeholder="text"
                                />
                            </div>
                        </div>

                        <div className={styles["bio-comp"]}>
                            <label className={styles["profile-label"]}> BIO {bio.length}/{MAX_TEXT_LENGTH} </label>
                            <textarea 
                                className={styles["input-long-text"]} 
                                type="text" 
                                id="bio" 
                                onChange={handleBioChange} 
                                placeholder="text" 
                                maxLength={500}
                            />
                        </div>

                        {/* might delete this and input under each skill */}
                        <div className={styles["rate-comp"]}>
                            <label className={styles["profile-label"]}> RATE (HOURLY) </label>
                                <input
                                    className={styles["input-int"]}
                                    type="number" 
                                    min="0"
                                    id="rate" 
                                    onChange={handleRateChange} 
                                    placeholder="0" 
                                />
                                <i className={styles["currency-symbol"]}> $ </i>
                        </div>

                        <div className={styles["tags-comp"]}>
                            <label className={styles["profile-label"]}> TAGS </label>
                            <div className={styles["input-tag-comp"]}>
                                {tag.map((tag, index) => (
                                    <div className={styles["tag-item"]} key={index}>
                                        <span className={styles["text"]}>{tag}</span>
                                        <span className={styles["tag-end"]} onClick={() => removeTag(index)}>&times;</span>
                                    </div>
                                ))}
                                <input 
                                    className={styles["input-tag"]}
                                    type="text" 
                                    id="tags" 
                                    placeholder="press enter to add tags" 
                                    onKeyDown={handleTagChange}  
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles["discard-or-save"]}>
                        <div className={styles["discard"]}>
                            <button className={styles["discard-button"]}> DISCARD CHANGES </button>
                        </div>
                        <div className={styles["save"]}>
                            <button className={styles["save-button"]}> SAVE PROFILE </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* right side */}
            <div className={styles["edit-profile-skill"]}>
                edit this after merging w/ johnny's commit
            </div>
        </div>
    );
};
// change to just Profile later
export default ProfileEdit;
