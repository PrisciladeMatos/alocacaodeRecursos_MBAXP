import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/ListPlaces">Lista Locais de Evento</Link>
          </li>
          <li>
            <Link to="/ListSituation">Lista de Situação de Recursos</Link>
          </li>
          <li>
            <Link to="/ListTypeUser">Lista de Tipos de Recursos</Link>
          </li>
          <li>
            <Link to="/ListUser">Lista de Recursos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;