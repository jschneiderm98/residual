import React from 'react';
// import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';

import Photo1 from '../../assets/photo1.png';
import Photo2 from '../../assets/photo2.png';
import Photo3 from '../../assets/photo3.png';
import Photo4 from '../../assets/photo4.png';
import { ReactComponent as TeacherIcon } from '../../assets/teacher.svg';

import './styles.css';

export default function Teachers() {
  // no projeto real isso seria um useState e acessaria a api para obter os dados
  const teachers = [
    { name: 'Juliana Ainb', image: Photo1, subject: 'MATEMÁTICA' },
    { name: 'Maria Eugenia', image: Photo2, subject: 'MATEMÁTICA' },
    { name: 'Juliana Ainb', image: Photo1, subject: 'MATEMÁTICA' },
    { name: 'Maria Eugenia', image: Photo2, subject: 'MATEMÁTICA' },
    { name: 'Clotilde Costa', image: Photo3, subject: 'MATEMÁTICA' },
    { name: 'Julia Mara', image: Photo4, subject: 'MATEMÁTICA' },
  ];

  return (
    <NavBar>
      <div className="TeachersPage">
        <h2 h2 className="TeachersTitle">Professores | Matemática</h2>
        <div className="TeachersScroll">
          {teachers.map((item) => (
            <div className="Teacher">
              <p>{item.subject}</p>
              <img src={item.image} alt={`Teacher ${item.name}`} className="TeacherImage" />
              <div className="TeacherName">
                <TeacherIcon />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavBar>
  );
}
