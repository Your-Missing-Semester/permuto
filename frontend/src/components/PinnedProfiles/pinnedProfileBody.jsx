import React from 'react';
import styles from '../HomePage/Body/homePageBody.module.css'
// frontend/src/components/HomePage/Body/homePageBody.module.css
function PinnedProfileBody () {
    const [searchInfo, setSearchInfo] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles["body-grid"]}>
            <p className={styles["home-heading"]}>HOME / PINNED PROFILES</p>
            <h1 className={styles["body-heading"]}>Pinned Profiles</h1>
            <p className={styles["search-bar-heading"]}>FILTER PROFILES</p>
            <div className={styles["search"]}> 
                <input
                type="text" 
                placeholder='Eg. Santa Claus'
                value={searchInfo}
                onChange={(e) => setSearchInfo(e.target.value)} 
                />

                <button
                className={styles["search-button"]}
                onClick={handleSubmit}>SEARCH</button>
            </div>   
        </div>
    )
}

export default PinnedProfileBody;