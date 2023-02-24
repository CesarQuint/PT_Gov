import React from 'react'
import { ImCancelCircle as Cancel,ImWarning as Warn, } from "react-icons/im";
import {BsCheckCircle as Check } from "react-icons/bs";




function Alerta({alerta,setAlerta}) {
    const {msg,type}=alerta

    const Icon=()=>{
        
    switch (type) {
        case "success":
            return(<Check/>)
            break;
        case "error":
            return(<Cancel/>)
            break;
        case "advice":
            return(<Warn/>)
            break;
    
        default:
            return(<Check/>)
            break;
    }
    }
  return (
    <div className={`alert ${type}`}>
       <p><span className='Icon'><Icon/></span> {msg}</p><span onClick={()=>setAlerta({})}>X</span>
    </div>
  )
}

export default Alerta