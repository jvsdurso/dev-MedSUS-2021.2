import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const OvoDeMascote = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Ovo de Mascote" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Ovo de <Link to='/Mascote'>Mascote</Link></p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Ovos de <Link to='/Mascote'>Mascote</Link></li>
        <li>Ovo</li>
        <li>Ovos</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Recipiente que guarda um <Link to='/Mascote'>mascote</Link> até que ele seja <Link to='/Chocar Ovo'>chocado</Link> e possa nascer</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Ovo de <Link to='/Mascote'>mascote</Link> recebem <Link to='/Poção de Eclosão'>poção de eclosão</Link></li>
        <li>Ovo de <Link to='/Mascote'>mascote</Link> <Link to='/Chocar Ovo'>choca</Link></li>
        <li>Ovo de <Link to='/Mascote'>mascote</Link> vira novo <Link to='/Mascote'>mascote</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Objeto</p>
    </Card>

  </div>
)

export default OvoDeMascote