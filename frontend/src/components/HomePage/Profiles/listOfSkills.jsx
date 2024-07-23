import React from 'react';
import styles from './profiles.module.css';

function LOS ({ user }) {
    console.log('user prop:', user);
    if (!Array.isArray(user.skills)) {
        return (":(");
    }
    return (
        <ul className={styles["skills"]}>
            {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    )
}

export default LOS;