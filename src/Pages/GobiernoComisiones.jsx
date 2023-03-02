import {useState,useEffect} from 'react'
import Cathedral from '../assets/img/Cathedral.jpg'
import Comisiones_Card from '../Components/Cards/Comisiones_Card'
import WelcomePanel from '../Components/WelcomePanel'
import getComisiones from '../db/Comisiones'

function GobiernoComisiones() {
    const [comisiones,setComisiones]=useState([])

    useEffect(()=>{
        const Comisiones=async()=>{
            const db=await getComisiones()
            setComisiones(db)
        }
        Comisiones()
    },[])

  return (
    <>
        <WelcomePanel
        bgColor={"#f7efe8"} 
        borderColor={"var(--AcCafe)"}
        Img={Cathedral}
        title={'Comisiones'}
        />
        <section className='bodyDef'>
            <div className='titleGobierno'>
                <h3>Comisiones Permanentes</h3>
                <span></span>
            </div>
            <div className='cabildoGrid'>
                {
                    comisiones.map(comision=>(
                        <Comisiones_Card
                            key={comision.comision}
                            data={comision}
                        />
                    ))
                }
            </div>
           
        </section>
    </>
  )
}

export default GobiernoComisiones