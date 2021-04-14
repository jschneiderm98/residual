import React from 'react';

import NavBar from '../../components/NavBar';
import Calendar from '../../assets/calendar.png';

import './styles.css';

export default function CalendarPage() {
  return (
    <NavBar>
      <div className="CalendarPage">
        <h2>Calendário</h2>
        <img src={Calendar} alt="Calendário" />
      </div>
    </NavBar>
  );
}
