import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ChocarOvo = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Chocar Ovo" author="Rogério Júnior"/>
    <Card>
      <h2>Nome</h2>
      <p>Chocar <Link to='/Ovo de Mascote'>Ovo</Link></p>
    </Card>

    <Card>
      <h2>Sinônimos</h2>
      <ul>
        <li>Chocar <Link to='/Ovo de Mascote'>ovo</Link></li>
        <li><Link to='/Ovo de Mascote'>Ovo</Link> choca</li>
        <li><Link to='/Ovo de Mascote'>Ovos</Link> chocam</li>
        <li>Chocado</li>
      </ul>
    </Card>

    <Card>
      <h2>Noção</h2>
      <ul>
        <li>Tarefa realizada pelo usuário</li>
        <li>Acontece quando o usuário aplica <Link to='/Poção de Eclosão'>poção de eclosão</Link> no <Link to='/Ovo de Mascote'>ovo</Link></li>
        <li>Processo que permite que um <Link to='/Mascote'>mascote</Link> nasça</li>
      </ul>
    </Card>

    <Card>
      <h2>Impacto</h2>
      <ul>
        <li>Chocar o <Link to='/Ovo de Mascote'>ovo</Link> permite o nascimento de um <Link to='/Mascote'>mascote</Link></li>
        <li>Chocar o <Link to='/Ovo de Mascote'>ovo</Link> dá um novo <Link to='/Mascote'>mascote</Link> ao usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Classificação</h2>
      <p>Verbo</p>
    </Card>

  </div>
)

export default ChocarOvo