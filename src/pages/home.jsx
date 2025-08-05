import React, { useState, useEffect } from 'react';
import { getStudentsCount } from '../services/studentsService';

const Home = () => {
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    // Obtener el número de estudiantes cargados
    const count = getStudentsCount();
    setStudentsCount(count);
  }, []);

  return (
    <div className="home">
      <h1>Bootcamp G086 Intermedio</h1>
      <h2>Bienvenidos al Bootcamp G086 Intermedio</h2>
      {studentsCount > 0 && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#e8f4fd', 
          borderRadius: '8px',
          border: '1px solid #3498db'
        }}>
          <p style={{ 
            color: '#2c3e50', 
            margin: 0, 
            fontSize: '1.1rem' 
          }}>
            📚 <strong>{studentsCount} estudiantes</strong> cargados en el sistema
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;