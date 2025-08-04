import React from 'react';

const Students = () => {
  // Datos de ejemplo para los estudiantes
  const students = [
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
      name: "María García",
      role: "Estudiante de Frontend",
      description: "Apasionada por el desarrollo.",
      profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333101/istockphoto-1194465593-612x612_igqaho.jpg"
    },
    {
      id: 5,
      name: "Carlos López",
      role: "Estudiante de Backend",
      description: "Enfocado en el desarrollo personal.",
      profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333238/ai-generated-portrait-of-a-young-man-no-facial-expression-facing-the-camera-isolated-white-background-ai-generative-free-photo_uha1di.jpg"
    },
    {
      id: 6,
      name: "Ana Rodríguez",
      role: "Estudiante de Full Stack",
      description: "Hay que ser versátil y proactivo.",
      profileImage: "https://res.cloudinary.com/dqaxadodm/image/upload/v1754333172/istockphoto-1194465573-612x612_co8qgb.jpg"
    }
  ];

  return (
    <div className="students">
      <h1>Nuestros Estudiantes</h1>
      <div className="students-grid">
        {students.map(student => (
          <div key={student.id} className="student-card">
            <div className="student-profile">
              <img 
                src={student.profileImage} 
                alt={student.name}
                className="student-avatar"
              />
              <h3 className="student-name">{student.name}</h3>
              <p className="student-role">{student.role}</p>
              <p className="student-description">{student.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;