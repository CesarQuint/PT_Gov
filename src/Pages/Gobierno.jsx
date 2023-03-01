import React from 'react'
import Cabildo_Card from '../Components/Cards/Cabildo_Card'
import Comisiones_Card from '../Components/Cards/Comisiones_Card'
import Secretaria_Card from '../Components/Cards/Secretaria_Card'
import WelcomePanel from '../Components/WelcomePanel'

import Cafe from '../assets/img/Cafe.jpg'


function Gobierno() {
  return (
    <>
    <WelcomePanel
    bgColor={"#F3F3F3"} 
    borderColor={"var(--AcCafe)"}
    Img={Cafe}
    title={'Integrantes del Cabildo'}
    />
    <section className='bodyDef'>
      
      <Cabildo_Card/>
      <Comisiones_Card/>
      <Secretaria_Card/>
    </section>
    </>
  )
}

export default Gobierno