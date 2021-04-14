import React from 'react';
// import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Conjuntos from '../../assets/conjuntos.png';

import './styles.css';

export default function Topic() {
  return (
    <NavBar>
      <div className="TopicPage">
        <h2 className="TopicTitle">Matemática | Conjuntos</h2>
        <div className="TopicImageContainer">
          <img src={Conjuntos} alt="Imagens de exemplo de conjunto" />
          <span>Fonte: https://pt.wikipedia.org/wiki/Teoria_dos_conjuntos</span>
        </div>
        <p>
          Teoria dos conjuntos ou de conjuntos é o ramo da matemática que estuda conjuntos,
          que são coleções de elementos. Embora qualquer tipo de elemento possa ser reunido em
          um conjunto, a teoria dos conjuntos é aplicada na maioria das vezes a elementos que são
          relevantes para a matemática. A linguagem da teoria dos conjuntos pode ser usada nas
          definições de quase todos os elementos matemáticos.
        </p>
        <p>
          O estudo moderno da teoria dos conjuntos foi iniciado por Georg Cantor e Richard Dedekind
          em 1870. Após a descoberta de paradoxos na teoria ingênua dos conjuntos, numerosos
          sistemas de axiomas foram propostos no início do século XX, dos quais os axiomas de
          Zermelo-Fraenkel, com o axioma da escolha, são os mais conhecidos.
        </p>
      </div>
    </NavBar>
  );
}
