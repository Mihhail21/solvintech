import React from 'react';
import styles from './CentralizingBlock.module.css';

const CentralizingBlock = ({ children }) => {
  return (
    <div className={styles.block}>
      {children}
    </div>
  );
};

export default CentralizingBlock;
