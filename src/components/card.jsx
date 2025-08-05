import React from 'react';
import styles from './card.module.css';

const Card = ({ student, showInputs = false, onNameChange, onRoleChange }) => {
  return (
    <div className={styles.studentCard}>
      <div className={styles.studentProfile}>
        <img 
          src={student.profileImage} 
          alt={student.name}
          className={styles.studentAvatar}
        />
        <h3 className={styles.studentName}>{student.name}</h3>
        <p className={styles.studentRole}>{student.role}</p>
        <p className={styles.studentDescription}>{student.description}</p>
        
        {showInputs && (
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Nombre"
              value={student.name}
              onChange={(e) => onNameChange(student.id, e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Rol"
              value={student.role}
              onChange={(e) => onRoleChange(student.id, e.target.value)}
              className={styles.input}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;