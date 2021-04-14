import React from 'react';
// import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import { ReactComponent as Geography } from '../../assets/geografia.svg';
import { ReactComponent as Math } from '../../assets/matematica.svg';
import { ReactComponent as Physics } from '../../assets/fisica.svg';
import { ReactComponent as Chemistry } from '../../assets/quimica.svg';
import { ReactComponent as UserIcon } from '../../assets/CharcoEducation.svg';
import { ReactComponent as UserIcon2 } from '../../assets/CharcoEducation2.svg';

import './styles.css';

export default function Dashboard() {
  const subject = [
    { name: 'Geografia', component: Geography },
    { name: 'Matemática', component: Math },
    { name: 'Física', component: Physics },
    { name: 'Química', component: Chemistry },
    { name: 'User', component: UserIcon },
    { name: 'User', component: UserIcon2 },
  ];

  return (
    <NavBar>
      <div className="Dashboard">
        <h2 className="SubjectsTitle">Escolha a displina</h2>
        <div className="SubjectsScroll">
          {subject.map((item) => (
            <div className="Subject">
              <item.component className="SubjectImage" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </NavBar>
  );
}
