import React, {useState} from 'react'
import styles from './changeUsername.module.css'
import axios from 'axios'

const ChangeUsername = () => {
    const [newUsername, setNewUsername] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const response = await axios.post('/changeUsername', {
            newUsername
          });
        alert('Username has been changed!');
    }

    return (
    <div className={styles["change-user-page"]}>
    <div className={styles.header}>
        <h5>Change username</h5>
    </div>

    <div className={styles["change-user-form"]}>
        <form onSubmit={handleSubmit}>
            <div className={styles["change-input"]}>
                <label>Enter new username:</label>
                <input className= {styles["user-input"]}
                    type="text"
                    name="new-user"
                    placeholder="New username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    required
                />
            </div>

            <div className={styles["confirm-button"]}>
                <button type="submit" className={styles["confirm-btn"]}>CHANGE</button>
            </div>
        </form>
    </div>
    </div>
    )
}

export default ChangeUsername
