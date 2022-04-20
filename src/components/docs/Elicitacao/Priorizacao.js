import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import cow from '../../../assets/cow.svg'
import ftf from '../../../assets/FTF.svg'


const items = [
  {
    link: '/MoSCoW',
    img: cow,
    title: 'MoSCoW'
  },
  {
    link: '/FirstThingsFirst',
    img: ftf,
    title: 'First Things First'
  },
]


const Elicitacao = () => (
  <div className="content artefact">
    <h1>Priorização</h1>
    <NCardsLayout items={ items }/>
  </div>
)

export default Elicitacao