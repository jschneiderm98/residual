/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.css';
import logo from '../../assets/black-logo.png';

export default function Home() {
  return (
    <div className="Home">
      <header className="HomeHeader">
        <img src={logo} alt="Educalis Logo" className="Logo" />
        <div className="Itens-Menu">
          <a href="" className="Item">Inicio</a>
          <a href="" className="Item">Quem somos</a>
          <a href="" className="Item">Estrutura</a>
          <a href="" className="Item">Contribua</a>
          <a href="" className="Item">Login</a>
        </div>
      </header>
      <section className="Landing">
        <h2>Expandindo as fronteiras</h2>
        <div className="educacao">
          <h2>da</h2>
          <h1>Educação!</h1>
        </div>
        <p>
          O Educalis é um projeto inovador que
          torna possível a Educação a Distância
          para estudantes de baixa renda, com
          dificuldades de mobilidade urbana
          ou sem acesso a internet!
        </p>
      </section>
      <section className="WhoWeAre">Quem somos</section>
      <section className="Structure">Estrutura</section>
      <section className="Contribute">Contribua</section>
      <footer>Educalis</footer>
    </div>
  );
}
