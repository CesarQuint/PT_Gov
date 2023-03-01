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
    bgColor={"#F3F3F3"} 
    borderColor={"var(--AcCafe)"}
    Img={Cafe}
    title={'Integrantes del Cabildo'}
    />
    <section className='bodyDef'>
      <div className='cabildoGrid'>
        {cabildoPeople.map(el=>(
          <Cabildo_Card
          key={el.name}
          data={el}
          />
        ))}
      </div>
      
      
      <Comisiones_Card/>
      <Secretaria_Card/>
    </section>
    </>
  )
}

export default GobiernoCabildo