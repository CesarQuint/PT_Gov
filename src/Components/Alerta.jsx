import React from 'react'

function Alerta({alerta,setAlerta}) {
    const {msg,type}=alerta
  return (
    <div className={`alert ${type}`}>
       <p>{msg}</p><span onClick={()=>setAlerta({})}>X</span>
    </div>
  )
}

export default Alerta