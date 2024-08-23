import { React, useState }from 'react';
import styles from './card.module.css';
import { BiSolidEdit, BiSave } from "react-icons/bi";

// 15 char limit for title
// 160 char limit for description

const Card = ({ image, skillName, description, isEditing, onEditCard, onSaveCard }) => {
    console.log("Card re-rendered")
    const [editedSkillName, setEditedSkillName] = useState(skillName);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleSaveCard = () => {
        onSaveCard(editedSkillName, editedDescription)
    };

    return (
        <div className={styles["card-container"]}>
            <img className={styles["card-back"]} src={image} alt="Card"/>

            <div className={styles["card-front"]}>
                <div className={styles["card-input-text"]}>
                    {isEditing ? (
                        <>
                            <input
                                className={styles["card-title-input"]}
                                value={editedSkillName}
                                onChange={(e) => setEditedSkillName(e.target.value)}
                            />
                            
                            <textarea 
                                className={styles["card-description-input"]}
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                            />

                            <div className={styles["card-edit-container"]}>
                                <button className={styles["card-save-button"]} onClick={handleSaveCard} > <BiSave /> Save </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles["card-title"]}>{skillName}</div>
                            <div className={styles["card-description"]}>{description}</div>
                            <div className={styles["card-edit-container"]}>
                                <button className={styles["card-edit-button"]} onClick={onEditCard}> <BiSolidEdit /> </button>
                            </div>
                        </>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
