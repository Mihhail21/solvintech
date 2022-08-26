import React from 'react';
import styles from './ModalWindow.module.css';
import {ReactComponent as Close} from './../../assets/close.svg';

const ModalWindow = ({ user, changeStatus }) => {
  return (
    <div className={styles.background} onClick={() => changeStatus(false)}>
      <div className={styles.window} onClick={(event) => event.stopPropagation()}>
        <Close className={styles.closeButton} onClick={() => changeStatus(false)} />

        <div className={styles.image}>
          <img src={user.picture} alt={user.name} width="100%" />
        </div>

        <div className={styles.userInfo}>
          <span className={styles.field}>
            <span className={styles.fieldName}>name:</span> {user.name}
          </span>

          <span className={styles.field}>
            <span className={styles.fieldName}>age:</span> {user.age}
          </span>

          <span className={styles.field}>
            <span className={styles.fieldName}>email:</span> {user.email}
          </span>

          <span className={styles.field}>
            <span className={styles.fieldName}>phone:</span> {user.phone}
          </span>

          <span className={styles.field}>
            <span className={styles.fieldName}>about:</span>
            <span>{user.about}</span>
          </span> 
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
