import React from 'react'
import { TbToolsKitchen as Kitchen,TbBus as Bus,TbBed as Bed,TbSmartHome as Museum } from "react-icons/tb";

function LugaresSide() {
  return (
    <div className='lugaresSide'>
      <div className='lugaresAtt'>
       <span><Kitchen/></span>
       <p>Restaurantes</p>
      </div>
      <div className='lugaresAtt'>
        <span><Bus/></span>
        <p>Tour y Operadores</p>
      </div>
      <div className='lugaresAtt'>
        <span><Bed/></span>
        <p>Hoteles y Cabañas</p>
      </div>
      <div className='lugaresAtt'>
        <span><Museum/></span>
        <p>Museos</p>
      </div>
    </div>
  )
}

export default LugaresSide