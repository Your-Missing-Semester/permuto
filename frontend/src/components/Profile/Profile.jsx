import React, { useRef, useState } from 'react';
import styles from './profile.module.css';
import 'react-image-crop/dist/ReactCrop.css';
import Modal from '../Modal/Modal'
import { HiArrowUpTray } from "react-icons/hi2";
import Card from '../Cards/Card';
import GenerateCards from '../GenerateCards/GenerateCards';

const Profile = () => {
    console.info("Profile re-rendered")

    const [isEditingProfile, setIsEditingProfile] = useState(false)

    const handleEditProfile = () => {
        setIsEditingProfile(true);
    };

    const handleSaveProfile = () => {
        setIsEditingProfile(false);
    };

    return (
        <div className={styles["edit-or-view"]}>
            {isEditingProfile ? (
                <ProfileEdit onSaveProfile={handleSaveProfile}/>
            ) : (
                <ProfileView onEditProfile={handleEditProfile}/>
            )}
        </div>
    );
};
    
const ProfileView = ({ onEditProfile }) => {
    console.info("ProfileView re-rendered")

    const [cards, setCards] = useState(GenerateCards(12));

    const [editingCardId, setEditingCardId] = useState(null);

    const handleEditCard = (id) => {
        setEditingCardId(id);
    };

    const handleSaveCard = (id, editedSkillName, editedDescription) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { 
                    ...card, skillName: editedSkillName, description: editedDescription } 
                    : card 
            )
        );
        setEditingCardId(null)
    }
  
    return (
        <div className={styles["pv-page"]}>
            <div className={styles["pv-container"]}>
                <div className={styles["pv-left-page"]}>
                    <button className={styles["back-button"]}>← Back</button>

                    <div className={styles["user-pfp"]}/>
            
                    <p className={styles["user-name"]}>Jason Chen</p>
  
                    <p className={styles["user-headline"]}>
                        San Francisco <span>Linear gang / WKL enjoyer</span>
                    </p>
  
                    <div className={styles["user-rating"]}>
                        <span>⭐ 4.97 / 5.0</span>
                        <span className={styles["user-rate"]}>$98/HR</span>
                    </div>
  
                    <p className={styles["user-bio"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
  
                    <div className={styles["user-tags"]}>
                        <span className={styles["dummy-tag"]}>Keyboard modding</span>
                        <span className={styles["dummy-tag"]}>Apex Legends</span>
                    </div>
  
                    <div className={styles["profile-buttons"]}>
                        <div className={styles["copy-profile-link"]}>
                            <button className={styles["copy-profile-link-button"]}> COPY PROFILE LINK </button>
                        </div>

                        <div className={styles["edit-profile"]}> 
                            <button className={styles["edit-profile-button"]} onClick={onEditProfile}> EDIT PROFILE </button>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className={styles["edit-profile-skill"]}>
                <form>
                    <div className={styles["skill-cards-row-container"]}>
                        {cards.map((card) =>
                            <Card 
                                key={card.id}
                                {...card}
                                isEditing={editingCardId === card.id}
                                onEditCard={() => handleEditCard(card.id)}
                                onSavCarde={(editedSkillName, editedDescription) =>
                                    handleSaveCard(card.id, editedSkillName, editedDescription)
                                }
                            />
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
  };

const ProfileEdit = ({ onSaveProfile }) => {
    const [profile, setProfile] = useState({
        name: '',
        location: '',
        bio: '',
        rate: '',
        tags: []
    });

    const MAX_TEXT_LENGTH = 500;
    const BIO_LENGTH = profile.bio?.length || 0;

    const handleProfileChange = (e) => {
        const { name, value } = e.target;

        if (name === 'tags') {
            const trimmedValue = value.trim();
            const currentTags = profile.tags || [];

            if (e.key === "Enter") {
                e.preventDefault();

                if (trimmedValue !== "" && !currentTags.includes(trimmedValue)) {
                    setProfile((prev) => ({...prev, tags: [...currentTags, trimmedValue]}));
                    e.target.value = '';
                } else {
                    alert("Tag already exists.");
                };
            };
        } else {
            setProfile((prev) => ({ ...prev, [name]: value }));
        }
    };

    // default profile pic
    const avatarUrl = useRef(
        "https://images2.alphacoders.com/130/1305995.png"
    );

    const updateAvatar = (imgSrc) => {
        avatarUrl.current = imgSrc
    }

    const [modalOpen, setModalOpen] = useState(false)

    // remove tag
    const removeTag = (index) => {
        console.info("error in removeTag")
        setProfile((prev) => ({ ...prev, tags: prev.tags.filter((_, i) => i !== index )}))
    };

    // cards
    const [cards, setCards] = useState(GenerateCards(12));

    const [editingCardId, setEditingCardId] = useState(null);

    const handleEditCard = (id) => {
        setEditingCardId(id);
    };

    const handleSaveCard = (id, editedSkillName, editedDescription) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { 
                    ...card, skillName: editedSkillName, description: editedDescription } 
                    : card 
            )
        );
        setEditingCardId(null)
    }

    return (
        <div className={styles["profile-edit-page"]}>
            {/* left side */}
            <div className={styles["edit-profile-summary"]}>
                <div className={styles["back-button-comp"]}> 
                    <button className={styles["back-symbol"]}> ← </button>
                </div>

                <form onSubmit={handleProfileChange} className={styles["profile-form"]}>
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
                                    name="name" 
                                    onChange={handleProfileChange} 
                                    placeholder="text" 
                                    autoComplete="on"
                                />
                            </div> 
                            <div className={styles["location-comp"]}>
                                <label className={styles["profile-label"]}> GENERAL LOCATION </label>
                                <input 
                                    className={styles["input-text"]}
                                    type="text" 
                                    name="location" 
                                    onChange={handleProfileChange} 
                                    placeholder="text"
                                />
                            </div>
                        </div>

                        <div className={styles["bio-comp"]}>
                            {/* fix profile.bio.length */}
                            <label className={styles["profile-label"]}> BIO {BIO_LENGTH}/{MAX_TEXT_LENGTH} </label>
                            <textarea 
                                className={styles["input-long-text"]} 
                                type="text" 
                                name="bio" 
                                onChange={handleProfileChange} 
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
                                    name="rate" 
                                    onChange={handleProfileChange} 
                                    placeholder="0" 
                                />
                                <i className={styles["currency-symbol"]}> $ </i>
                        </div>

                        <div className={styles["tags-comp"]}>
                            <label className={styles["profile-label"]}> TAGS </label>
                            <div className={styles["input-tag-comp"]}>
                                {(profile.tags || []).map((tag, index) => (
                                    <div className={styles["tag-item"]} key={index}>
                                        <span className={styles["text"]}>{tag}</span>
                                        <span className={styles["tag-end"]} onClick={() => removeTag(index)}>&times;</span>
                                    </div>
                                ))}
                                <input 
                                    className={styles["input-tag"]}
                                    type="text" 
                                    name="tags" 
                                    placeholder="press enter to add tags" 
                                    onKeyDown={handleProfileChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles["discard-or-save"]}>
                        <div className={styles["discard"]}>
                            <button className={styles["discard-button"]}> DISCARD CHANGES </button>
                        </div>
                        <div className={styles["save"]}>
                            <button className={styles["save-button"]} onClick={onSaveProfile}> SAVE PROFILE </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* right side */}
            <div className={styles["edit-profile-skill"]}>
                <form>
                    <div className={styles["skill-cards-row-container"]}>
                        {cards.map((card) =>
                            <Card 
                                key={card.id}
                                {...card}
                                isEditing={editingCardId === card.id}
                                onEdit={() => handleEditCard(card.id)}
                                onSave={(editedSkillName, editedDescription) =>
                                    handleSaveCard(card.id, editedSkillName, editedDescription)
                                }
                            />
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
// change to just Profile later
export default Profile;
