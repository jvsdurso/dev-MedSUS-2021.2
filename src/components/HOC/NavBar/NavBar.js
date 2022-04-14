import React from 'react'
import './NavBar.scss'
import logo from '../../../assets/logo_medsus.png'

import { NavLink } from 'react-router-dom'

const NavBar = props => (
  <div>
    <nav className="nav">
      <NavLink to="/"><img src={ logo } alt="MedSUS"/></NavLink>
      <ul>
        <NavLink to="/Disciplina">Disciplina</NavLink>
        <NavLink to="/Sobre">Sobre</NavLink>
        <NavLink to="/Pre-Rastreabilidade">Pré-Rastreabilidade</NavLink>
        <NavLink to="/Elicitacao">Elicitação</NavLink>
        <NavLink to="/Modelagem">Modelagem</NavLink>
        <NavLink to="/Analise">{'V&V'}</NavLink>
        <NavLink to="/Pos-Rastreabilidade">Pós-Rastreabilidade</NavLink>
      </ul>
    </nav>

    { props.children }
  </div>
)

export default NavBar