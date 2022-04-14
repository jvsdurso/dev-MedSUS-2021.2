import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import dictionary from '../../../assets/dictionary.png'
import route from '../../../assets/destination.svg'
import NFR from '../../../assets/NFR.svg'
import Backlog from '../../../assets/Backlog.svg'
import UserStory from '../../../assets/UserStory.svg'
import CasosDeUso from '../../../assets/CasosDeUso.svg'
import Suplementar from '../../../assets/Suplementar.svg'
import Referencias from '../../UI/reference/reference'

const items = [
  {
    link: '/Lexicos',
    img: dictionary,
    title: 'Léxicos'
  },
  {
    link: '/Cenarios',
    img: route,
    title: 'Cenários'
  },
  {
    link: '/CasosDeUso',
    img: CasosDeUso,
    title: 'Casos de Uso'
  },
  {
    link: '/EspecificacaoSuplementar',
    img: Suplementar,
    title: 'Especificação Suplementar'
  },
  {
    link: '/ProductBacklog',
    img: Backlog,
    title: 'Product Backlog'
  },
  {
    link: '/NFR',
    img: NFR,
    title: 'NFR'
  },
  {
    link: '/UserStory',
    img: UserStory,
    title: 'História de Usuário'
  }
]

const Modelagem = (props) => (
  <div>
    <div className="content artefact">
      <h1>Modelagem</h1>
      <NCardsLayout items={items} />
    </div>
    <Referencias reference="modelagem" />
  </div>
)

export default Modelagem