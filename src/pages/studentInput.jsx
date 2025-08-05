import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { getStudents, updateStudent, resetStudents } from '../services/studentsService';
import styles from './studentInput.module.css';

const StudentInput = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar estudiantes desde localStorage al montar el componente
    const loadStudents = () => {
      try {
        const loadedStudents = getStudents();
        setStudents(loadedStudents);
      } catch (error) {
        console.error('Error loading students:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStudents();
  }, []);

  const handleNameChange = (studentId, newName) => {
    // Actualizar en localStorage
    const updatedStudents = updateStudent(studentId, { name: newName });
    // Actualizar estado local
    setStudents(updatedStudents);
  };

  const handleRoleChange = (studentId, newRole) => {
    // Actualizar en localStorage
    const updatedStudents = updateStudent(studentId, { role: newRole });
    // Actualizar estado local
    setStudents(updatedStudents);
  };

  const handleReset = () => {
    // Confirmar antes de resetear
    if (window.confirm('¿Estás seguro de que quieres restaurar los datos originales? Se perderán todos los cambios.')) {
      const resetData = resetStudents();
      setStudents(resetData);
    }
  };

  if (loading) {
    return (
      <div className={styles.students}>
        <div className={styles.header}>
          <h1>Editar Estudiantes</h1>
        </div>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando estudiantes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.students}>
      <div className={styles.header}>
        <h1>Editar Estudiantes</h1>
        
      </div>
      <div className={styles.studentsGrid}>
        {students.map(student => (
          <Card
            key={student.id}
            student={student}
            showInputs={true}
            onNameChange={handleNameChange}
            onRoleChange={handleRoleChange}
          />
        ))}
      </div>
        <br />
        <button 
          onClick={handleReset} 
          className={styles.resetButton}
        >
          Restaurar Datos Originales
        </button>
    </div>
  );
};

export default StudentInput;