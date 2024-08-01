import React from 'react';
import styles from './card.module.css';

const Card = ({ image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Card" className={styles.cardImage} />
    </div>
  );
};

export default Card;
