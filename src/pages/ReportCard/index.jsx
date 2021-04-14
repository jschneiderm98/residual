import React from 'react';
// import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';

import { ReactComponent as TeacherIcon } from '../../assets/teacher.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';

import './styles.css';

export default function ReportCard() {
  // no projeto real isso seria um useState e acessaria a api para obter os dados
  const teachers = [
    { name: 'Juliana Ainb', grade: '28,0', subject: 'MATEMÁTICA' },
    { name: 'Maria Eugenia', grade: '15,6', subject: 'MATEMÁTICA' },
    { name: 'Juliana Ainb', grade: '26,4', subject: 'MATEMÁTICA' },
    { name: 'Maria Eugenia', grade: '25,7', subject: 'MATEMÁTICA' },
    { name: 'Clotilde Costa', grade: '20,3', subject: 'MATEMÁTICA' },
    { name: 'Julia Mara', grade: '19,0', subject: 'MATEMÁTICA' },
  ];

  return (
    <NavBar>
      <div className="GradesPage">
        <h2 h2 className="GradesTitle">Professores | Matemática</h2>
        <div className="GradesScroll">
          {teachers.map((item) => (
            <div className="Grade">
              <p>{item.subject}</p>
              <div className="TeacherName">
                <TeacherIcon />
                <span>{item.name}</span>
              </div>
              <div className="GradeValue">
                <StarIcon />
                <span>{`${item.grade} pontos`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavBar>
  );
}
