// src/services/studentsService.js

const STORAGE_KEY = 'bootcamp_students';

// Datos iniciales de los estudiantes
const initialStudents = [
  {
    id: 1,
    name: "María García",
    role: "Estudiante de Frontend",
    description: "Apasionada por el desarrollo.",
    profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333101/istockphoto-1194465593-612x612_igqaho.jpg"
  },
  {
    id: 2,
    name: "Carlos López",
    role: "Estudiante de Backend",
    description: "Enfocado en el desarrollo personal.",
    profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333238/ai-generated-portrait-of-a-young-man-no-facial-expression-facing-the-camera-isolated-white-background-ai-generative-free-photo_uha1di.jpg"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    role: "Estudiante de Full Stack",
    description: "Hay que ser versátil y proactivo.",
    profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333172/istockphoto-1194465573-612x612_co8qgb.jpg"
  },
  {
    id: 4,
    name: "María Romero",
    role: "Estudiante Analista",
    description: "Apasionada por el desarrollo.",
    profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333101/istockphoto-1194465593-612x612_igqaho.jpg"
  },
  {
    id: 5,
    name: "Carlos Ospina",
    role: "Estudiante de BD",
    description: "Enfocado en el desarrollo personal.",
    profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333238/ai-generated-portrait-of-a-young-man-no-facial-expression-facing-the-camera-isolated-white-background-ai-generative-free-photo_uha1di.jpg"
  },
  {
    id: 6,
    name: "Ana Reina",
    role: "Estudiante de Backend",
    description: "Hay que ser versátil y proactivo.",
    profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333172/istockphoto-1194465573-612x612_co8qgb.jpg"
  }
];

// Obtener los datos iniciales de estudiantes
export const getInitialStudents = () => {
  return [...initialStudents];
};

// Inicializar localStorage con datos por defecto si no existen
export const initializeStudents = () => {
  try {
    const existingStudents = localStorage.getItem(STORAGE_KEY);
    if (!existingStudents) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStudents));
      return initialStudents;
    }
    return JSON.parse(existingStudents);
  } catch (error) {
    console.error('Error initializing students:', error);
    return initialStudents;
  }
};

// Obtener todos los estudiantes del localStorage
export const getStudents = () => {
  try {
    const students = localStorage.getItem(STORAGE_KEY);
    return students ? JSON.parse(students) : [];
  } catch (error) {
    console.error('Error getting students:', error);
    return [];
  }
};

// Actualizar un estudiante específico
export const updateStudent = (id, updatedData) => {
  try {
    const students = getStudents();
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, ...updatedData } : student
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudents));
    return updatedStudents;
  } catch (error) {
    console.error('Error updating student:', error);
    return getStudents();
  }
};

// Guardar todos los estudiantes
export const saveStudents = (students) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    return students;
  } catch (error) {
    console.error('Error saving students:', error);
    return students;
  }
};

// Resetear a datos iniciales
export const resetStudents = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStudents));
    return [...initialStudents];
  } catch (error) {
    console.error('Error resetting students:', error);
    return [...initialStudents];
  }
};

// Verificar si el localStorage tiene datos
export const hasStudentsData = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch (error) {
    console.error('Error checking localStorage:', error);
    return false;
  }
};

// Obtener cantidad de estudiantes
export const getStudentsCount = () => {
  try {
    const students = getStudents();
    return students.length;
  } catch (error) {
    console.error('Error getting students count:', error);
    return 0;
  }
};