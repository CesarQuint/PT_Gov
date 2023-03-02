import React from 'react'
import Cathedral from '../assets/img/Cathedral.jpg'
import WelcomePanel from '../Components/WelcomePanel'

function GobiernoComisiones() {
  return (
    <>
        <WelcomePanel
        bgColor={"#f7efe8"} 
        borderColor={"var(--AcCafe)"}
        Img={Cathedral}
        title={'Comisiones'}
        />
        <section className='bodyDef'>

        </section>
    </>
  )
}

export default GobiernoComisiones