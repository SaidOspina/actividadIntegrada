import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Students from './pages/students';
import StudentInput from './pages/studentInput';
import QR from './pages/qr';
import Error from './pages/error';
import { initializeStudents, hasStudentsData, getStudentsCount } from './services/studentsService';
import './App.css';

function App() {
  useEffect(() => {
    // Inicializar los datos de estudiantes en localStorage al cargar la aplicación
    const initializeApp = () => {
      console.log('🚀 Inicializando aplicación...');
      
      if (!hasStudentsData()) {
        console.log('📝 No se encontraron datos de estudiantes, inicializando...');
        const students = initializeStudents();
        console.log(`✅ ${students.length} estudiantes inicializados correctamente`);
      } else {
        const count = getStudentsCount();
        console.log(`📚 Datos de estudiantes encontrados: ${count} estudiantes cargados`);
      }
    };

    initializeApp();
  }, []);
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/student-input" element={<StudentInput />} />
              <Route path="/qr" element={<QR />} />
              <Route path="/error" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;