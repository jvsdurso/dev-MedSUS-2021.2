import React from 'react'
import './Hero.scss'
import MedsusLogo from '../../../../assets/Medsus-logo.png'

const Hero = () => (

<header className="hero">
    <section>
      <p className='hero__name'>MedSUS</p>
      <p className='hero__texto'>Aplicativo móvel para a consulta de medicamentos fornecidos pela RENAME.</p>
      <img className='hero__logo' src={ MedsusLogo } alt="Logo do MedSUS"/>
    </section>
</header>


)

export default Hero