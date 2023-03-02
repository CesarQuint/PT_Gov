import {useEffect,useState} from 'react'
import Cabildo_Card from '../Components/Cards/Cabildo_Card'
import Comisiones_Card from '../Components/Cards/Comisiones_Card'
import Secretaria_Card from '../Components/Cards/Secretaria_Card'
import WelcomePanel from '../Components/WelcomePanel'

import getCabildo from '../db/Cabildo'

import Cafe from '../assets/img/Cafe.jpg'


function GobiernoCabildo() {

  const[cabildoPeople,setCabildoPeople]=useState([])

  
  useEffect(()=>{
    const getData=async()=>{
      const data=await getCabildo()
     setCabildoPeople(data) 
  }
  getData()
  },[])

  return (
    <>
    <WelcomePanel
    bgColor={"#f7efe8"} 
    borderColor={"var(--AcCafe)"}
    Img={Cafe}
    title={'Integrantes del Cabildo'}
    />
    <section className='bodyDef'>
      
      <div className='titleGobierno'>
        <h3>Conoce a los Integrantes del cabildo 2018-2021</h3>
        <div className='lineNext'>
        </div>
      </div>
     
      <div className='cabildoGrid'>
        {cabildoPeople.map(el=>(
          <Cabildo_Card
          key={el.name}
          data={el}
          />
        ))}
      </div>
      
    </section>
    </>
  )
}

export default GobiernoCabildo