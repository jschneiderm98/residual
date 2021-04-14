import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as CalendarIcon } from '../../assets/calendarIcon.svg';
import { ReactComponent as BookIcon } from '../../assets/bookIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/userIcon.svg';
import { ReactComponent as TeacherIcon } from '../../assets/teacher.svg';
import { ReactComponent as ExitIcon } from '../../assets/exit.svg';

import logo from '../../assets/mini-logo.png';

import './styles.css';

const comp = (path, check) => ((path === check) ? 'Selected' : null);

export default function NavBar({ children }) {
  const location = useLocation();

  return (
    <div className="NavBackground">
      <div className="NavBar">
        <img src={logo} alt="Educalis logo" />
        <Link to="/dashboard" className={comp(location.pathname, '/dashboard')}>
          <UserIcon />
          <span>Disciplinas</span>
        </Link>
        <Link to="/">
          <CalendarIcon />
          <span>Calendários</span>
        </Link>
        <Link to="/">
          <BookIcon />
          <span>Boletim</span>
        </Link>
      </div>
      <div className="Content">
        <div className="Icons">
          <Link to="/">
            <TeacherIcon />
            <span>Professores</span>
          </Link>
          <Link to="/login">
            <ExitIcon />
            <span>Sair</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
