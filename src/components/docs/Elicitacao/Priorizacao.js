import React from 'react'
import route from '../../../assets/destination.svg'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import cow from '../../../assets/cow.svg'


const items = [
  {
    link: '/MoSCoW',
    img: cow,
    title: 'MoSCoW'
  },
]

const Elicitacao = () => (
  <div className="content artefact">
    <h1>Priorização</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao