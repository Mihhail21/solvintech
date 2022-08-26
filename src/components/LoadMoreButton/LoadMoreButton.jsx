import React from 'react';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ setVisibleNumberCards }) => {
  const loadMore = () => setVisibleNumberCards(currentValue => currentValue + 4);

  return (
    <input type="button" value="Load more..." className={styles.button} onClick={loadMore}/>
  );
};

export default LoadMoreButton;
