import styles from './UserCard.module.css';
import React from 'react';
import ModalWindow from './../ModalWindow/ModalWindow';

const UserCard = ({ user }) => {
  const [modalWindowIsOpen, setModalWindowIsOpen] = React.useState(false);

  return (
    <>
      <div className={styles.block} onClick={() => setModalWindowIsOpen(true)}>
        <div className={styles.image}>
          <img src={user.picture} alt={user.name} width="100%" />
        </div>
        <div className={styles.fieldsAlign}>
          <span className={styles.field}>
            <span className={styles.fieldName}>name:</span> {user.name}
          </span>
          <span className={styles.field}>
            <span className={styles.fieldName}>email:</span> {user.email}
          </span>
        </div>
      </div>
      {modalWindowIsOpen && <ModalWindow user={user} changeStatus={setModalWindowIsOpen} />}
    </>
  );
};

export default UserCard;
