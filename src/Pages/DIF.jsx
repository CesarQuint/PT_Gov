import React from 'react'
import WelcomePanel from '../Components/WelcomePanel'
import CentroDif from '../Components/CentroDif'

//!Zona de DB temporal

const ctrDIF={
    actividades:[
      "Comer",
      "Ingles",
      "Caminata",
      "Natacion",
      "Lectura",
      "Pintura",
      "Tecnologia",
      "Programacion",
      "Manualidades",
      "Paydo",
      "Futbol",
      "Basquet"
    ]
}


//TODO:Agregar valores  variables
function DIF() {
  return (
    <>
      <WelcomePanel/>
      <section className='bodyDef'>
        <article className='articleDef'>
          <div className='hexArticle'></div>
          <div className='articleText'>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
          </div>
          
        </article>
        <h3>Conoce los diferentres centros del DIF ,sus cursos y actividades</h3>
        <h4>Filtrar por curso o actividad</h4>
        <div className='selectSection'>
          <select name="curso" id="">
            <option value="0"> --Opciones -- </option>
            <option value="1"> --Opciones 1 -- </option>
            <option value="2"> --Opciones 2 -- </option>
          </select>
          <CentroDif ctrDIF={ctrDIF}/>
        </div>
      </section>
    </>
  )
}

export default DIF