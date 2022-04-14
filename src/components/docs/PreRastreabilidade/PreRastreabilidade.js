import React from 'react'
import NCardsLayout from '../../UI/NCardsLayout/NCardsLayout'
import richpictureIcon from '../../../assets/rich-picture.svg'
import i5W2H from '../../../assets/5w2h.svg'
import Referencias from '../../UI/reference/reference'

const items = [
  {
    link: '/5W2H',
    img: i5W2H,
    title: '5W2H'
  },
  {
    link: '/RichPictures',
    img: richpictureIcon,
    title: 'Rich Pictures'
  }
]

const PreRastreabilidade = () => (
  <div>
    <div className="content artefact">
      <h1>Pré-Rastreabilidade</h1>
      <NCardsLayout items={items} />
    </div>
    <Referencias reference="preRastrabilidade"/>
  </div>
)

export default PreRastreabilidade