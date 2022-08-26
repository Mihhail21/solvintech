import React from 'react';
import styles from './AlignCards.module.css';

const AlignCards = ({ children }) => {
  return (
    <div className={styles.align}>
      {children}
    </div>
  );
};

export default AlignCards;
