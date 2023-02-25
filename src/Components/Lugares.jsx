import {useState} from 'react'
import LugaresMain from './LugaresMain'
import LugaresSide from './LugaresSide'

function Lugares() {
  //TODO:Agregar funcionalidad de seleccion de Area
  const [attribute,setAttribute]=useState(0)
  return (
    <>
    <div className='lugaresDiv'>
        <LugaresSide
          attribute={attribute}
          setAttribute={setAttribute}
        />
        <LugaresMain

        />
    </div>
    
    </>
  )
}

export default Lugares