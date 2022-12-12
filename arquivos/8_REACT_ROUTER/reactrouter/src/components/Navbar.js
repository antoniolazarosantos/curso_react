import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar