import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import test from '../../assets/test.png';

import './styles.css';

function Login({ history }) {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('loggedMatricula', matricula);
    localStorage.setItem('loggedSenha', senha);
  };

  return (
    <div className="Login">
      <div />
      <div className="LoginContainer">
        <img src={logo} alt="Educalis logo" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Matrícula"
            onChange={
            (e) => setMatricula(e.target.value)
          }
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={
            (e) => setSenha(e.target.value)
          }
          />
          <button type="submit" onClick={() => history.push('/dashboard')}>Entrar</button>
          <div className="LoginLinks">
            <Link to="/cadastro">Criar conta</Link>
            <Link to="/recover">Esqueceu sua senha</Link>
          </div>
        </form>
      </div>
      <img src={test} alt="people doing a test" />
    </div>
  );
}

export default withRouter(Login);
