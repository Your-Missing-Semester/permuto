import React from 'react';
import styles from './ProfileView.module.css';
import Card from './card';
import clubsImage from '../Assets/cardImages/club.png';
import spadesImage from '../Assets/cardImages/spade.png';
import heartsImage from '../Assets/cardImages/heart.png';
import diamondsImage from '../Assets/cardImages/diamond.png';

const ProfileView = () => {
  const cards = [clubsImage, spadesImage, heartsImage, diamondsImage];

  return (
    <div className={styles["pv-page"]}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <button className={styles.backButton}>← Back</button>
          <div className={styles.pfp}></div>
          <h1>Jason Chen</h1>

          <p className={styles.headline}>
            San Francisco <span>Linear gang / WKL enjoyer</span>
          </p>

          <div className={styles.rates}>
            <span>⭐ 4.97 / 5.0</span>
            <span className={styles.rate}>$98/HR</span>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>Keyboard modding</span>
            <span className={styles.tag}>Apex Legends</span>
          </div>

          <div className={styles["profile-buttons"]}>
            <button className={styles.copyLink}>COPY PROFILE LINK</button>
            <button className={styles.book}>BOOK</button>
          </div>
        </div>

        <div className={styles.orangeBackground}>
          <div className={styles.cardLayout}>
            {cards.map((image, index) => (
              <Card key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
