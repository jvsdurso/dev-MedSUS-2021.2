import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import Brainstorm from '../../../assets/Brainstorm.svg'
import Introspeccao from '../../../assets/Introspeccao.svg'
import Personas from '../../../assets/Personas.svg'
import Storytelling from '../../../assets/Storytelling.svg'


const items = [
  {
    link: '/Brainstorm',
    img: Brainstorm,
    title: 'Brainstorm'
  },
  {
    link: '/Introspeccao',
    img: Introspeccao,
    title: 'Introspecção'
  },
  {
    link: '/Personas',
    img: Personas,
    title: 'Personas'
  },
  {
    link: '/Storytelling',
    img: Storytelling,
    title: 'Storytelling'
  },
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Elicitação</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao