import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';

import './styles.css';

export default function SpecificSubject() {
  const topics = [
    { name: 'Inequações' },
    { name: 'Equações 1º' },
    { name: 'Equações 2º' },
    { name: 'Conjuntos' },
    { name: 'Matrizes' },
    { name: 'Polinômios' },
    { name: 'Proporcionalidade' },
  ];

  return (
    <NavBar>
      <div className="SpecificSubject">
        <h2 className="SpecificSubjectsTitle">Matemática</h2>
        <div className="SpecificSubjectsContainer">
          {topics.map((item) => (
            <Link to="/topic" className="Topics"><span>{item.name}</span></Link>
          ))}
        </div>
      </div>
    </NavBar>
  );
}
