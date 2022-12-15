import React from 'react';
import {NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/about">Sobre</NavLink>   
        <NavLink to="/teste" className={({isActive}) => (isActive ? "ativo" : "nao-ativo")}>Teste</NavLink>
        <NavLink to="/outro-teste" className={({isActive}) => (isActive ? "ativo" : "nao-ativo")}>Outro Teste</NavLink>     
    </nav>
  )
}

export default Navbar