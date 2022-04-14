import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComprarMissaoLojaSazonal = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar missões na Loja Sazonal" author="Lucas Dutra"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/Utilizar a loja do Habitica - Loja Sazonal'>Utilizar Loja Sazonal</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Comprar missões na <Link to='/Loja Sazonal'>loja sazonal</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve possuir <Link to='/Moeda'>Moedas</Link> ou <Link to='/Gema'>Gemas</Link>, o usuário deve estar no nível requerido pela missão </li>
        <li>Local: Loja do habitica, aba loja sazonal</li>
        <li>Tempo: Qualquer momento que o usuário desejar</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to='/Moeda'>Moedas</Link></li>
        <li><Link to='/Gema'>Gemas</Link></li>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>O usuário <Link to='/Adquirir Moedas'>ganha moedas</Link> ou <Link to='/Comprar gema V1'>compra Gemas</Link></li>
        <li>O usuário acessa a <Link to='/Loja'>loja</Link> </li>
        <li>O usuário navega a aba <Link to='/Loja Sazonal'>loja sazonal</Link></li>
        <li>O usuário avalia o preço da missão</li>
        <li>O usuário compara o preço da missão com seu saldo</li>
        <li>O usuário lê qual o objetivo da missão</li>
        <li>O usuário avalia a dificuldade da missão</li>
        <li>O usuário avalia quais são as recompensas da missão</li>
        <li>O usuário compra a missão </li>
      </ul>
    </Card>

  </div>
)

export default ComprarMissaoLojaSazonal