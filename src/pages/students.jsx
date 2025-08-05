import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { getStudents } from '../services/studentsService';

const Students = () => {
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

  if (loading) {
    return (
      <div className="students">
        <h1>Nuestros Estudiantes</h1>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando estudiantes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="students">
      <h1>Nuestros Estudiantes</h1>
      <div className="students-grid">
        {students.map(student => (
          <Card
            key={student.id}
            student={student}
            showInputs={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;