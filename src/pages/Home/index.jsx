/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import rocketIcon from '../../assets/rocket-icon.png';
import eyeIcon from '../../assets/eye-icon.png';
import diamondIcon from '../../assets/diamond-icon.png';
import eHub1 from '../../assets/e-hub-1.png';
import eHub2 from '../../assets/e-hub-2.png';
import eHub3 from '../../assets/e-hub-3.png';
import books from '../../assets/books.png';
import gift from '../../assets/gift.png';

import './styles.css';

export default function Home() {
  const [name, setName] = useState('Nome');
  const [local, setLocal] = useState('');
  const [contribution, setContribution] = useState('Digite aqui como você gostaria de contribuir');

  const handleSubmit = (e) => {
    // eslint-disable-next-line no-alert
    alert(`Um nome foi enviado: ${name}, ${local}`);
    e.preventDefault();
  };

  return (
    <div className="Home">
      <header>
        <img src={logo} alt="Educalis Logo" className="Logo" />
        <div className="Itens-Menu">
          <a href="/#Landing" className="Item">Inicio</a>
          <a href="/#WhoWeAre" className="Item">Quem somos</a>
          <a href="/#Structure" className="Item">Estrutura</a>
          <a href="/#Contribute" className="Item">Contribua</a>
          <Link to="/login" className="Item">Login</Link>
        </div>
      </header>
      <section className="Landing" id="Landing">
        <h2>Expandindo as fronteiras</h2>
        <div className="educacao">
          <h2>da</h2>
          <h1>Educação!</h1>
        </div>
        <p className="NormalText">
          O Educalis é um projeto inovador que
          torna possível a Educação a Distância
          para estudantes de baixa renda, com
          dificuldades de mobilidade urbana
          ou sem acesso a internet!
        </p>
      </section>
      <section className="WhoWeAre" id="WhoWeAre">
        <div className="WWAContainer">
          <h3>Quem somos</h3>
          <p className="NormalText">
            Educalis foi criada pela união de jovens multidisciplinares
            com propósito de democratizar o acesso de comunidades com dificuldades
            de mobilidade urbana através da utilização de tecnologias. Juntamos as
            últimas tecnologias de hardware e software para criar nosso produto
            final com materiais de primeira linha e baixo custo de forma
            sustentável.
          </p>
          <p className="NormalText">
            O sistema funciona em uma rede local, sem necessidade de internet,
            no qual será mediado pelo nosso Ambiente Virtual de Aprendizagem (AVA).
            Nesse AVA as instituições de ensino poderão disponibilizar material
            didático, informações, realizar aulas com foco no processo de ensino e
            aprendizagem.
          </p>
          <div className="Frames">
            <div className="Frame">
              <img src={rocketIcon} alt="Ícone de foguete" />
              <h5>Missão</h5>
              <span>
                Melhorar a educação de comunidades que tenham o acesso a escola
                precário através de tecnologia acessível e de baixo custo.
              </span>
            </div>
            <div className="Frame">
              <img src={eyeIcon} alt="Ícone de um olho" />
              <h5>Visão</h5>
              <span>
                Diminuir os índices de desigualdades oferecendo acesso a
                educação de qualidade de forma remota.
              </span>
            </div>
            <div className="Frame">
              <img src={diamondIcon} alt="Ícone de um diamante" />
              <h5>Valores</h5>
              <span>
                Responsabilidade, Inovação, Acessibilidade, Sustentabilidade,
                Empatia, Comprometimento.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="Structure" id="Structure">
        <h3>Estrutura</h3>
        <p className="NormalText">
          O fator chave para a funcionalidade do projeto é a infraestrutura
          responsável por propagar nossa plataforma para estudantes sem conexão
          com internet. Para que isso seja possível ultilizamos um conjunto de
          dispositivos movidos a energia solar (nomeados por nós como &quot;E-hubs&quot;),
          conectados sem fio entre si, que criam uma rede a qual pode ser acessada
          por qualquer pessoa com um smartphone ou computador.
        </p>
        <div className="EHub">
          <div><img src={eHub1} alt="Foto E-Hub 1" /></div>
          <div><img src={eHub2} alt="Foto E-Hub 2" /></div>
          <div><img src={eHub3} alt="Foto E-Hub 3" /></div>
        </div>
        <p className="NormalText">
          A usabilidade é simples, basta que o aluno acesse a rede Wi-Fi gerada pelo
          E-hub mais próximo. Ao conectar-se, o estudante tem acesso a nossa plataforma
          de ensino virtual, contendo materiais didáticos para todas as áreas.
          A plataforma foi pensada por uma equipe de profissionais para tornar o
          aprendizado a distância mais proveitoso, refletindo em um processo de ensino
          mais eficiente por meio do nosso ecossistema.
        </p>
        <img src={books} alt="Mulher sobre livros" className="Books" />
      </section>
      <section className="Contribute" id="Contribute">
        <h3>Contribua</h3>
        <p className="NormalText">
          Quer ajudar a Educalis a chegar nos mais de 6 milhões de estudantes
          sem acesso a internet no Brasil? Seja um patricionador e nos ajude a
          propagar a educação para quem não tem acesso a esse direito!
        </p>
        <p className="NormalText">
          Você pode ajudar doando equipamentos como celulares, tablets e
          computadores para nossos jovens. Basta preencher o formulário abaixo
          que entraremos em contato com você!
        </p>
        <div className="ContributeFormContainer">
          <img src={gift} alt="Pessoa dando presente a outra pessoa" />
          <form className="ContributeForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Cidade/Estado"
              onChange={(e) => {
                setLocal(e.target.value);
              }}
            />
            <div
              contentEditable
              tabIndex={0}
              onKeyPress={() => {}}
              onClick={() => {
                document.execCommand('selectAll', false, null);
              }}
              role="textbox"
              onChange={(e) => {
                setContribution(e.target.value);
              }}
            >
              {contribution}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <footer>
        <img src={logo} alt="Educalis logo" />
        <div className="Line" />
        <span>Expandindo as barreiras da educação</span>
      </footer>
    </div>
  );
}
