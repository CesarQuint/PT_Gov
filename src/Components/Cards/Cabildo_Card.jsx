import React from 'react'


function Cabildo_Card({data}) {
  const{ext,numeros,name,photo,posicion}=data
  return (
    <div className='card'>
      <div className='upCard'>
        <div className='imgCabildo' style={{backgroundImage:`url(src/assets/img/${photo}.jpg)`}} ></div>
        <aside className='namePosition'>
          <h5>{name}</h5>
          <p className='descrip'>{posicion}</p>
        </aside>
      </div>
      <div className='lowCard'>
        {numeros.map(num=>(
          <p
          key={num}
          >{num}</p>
        ))}
        <p>Ext: {ext}</p>
      </div>
    </div>
  )
}

export default Cabildo_Card