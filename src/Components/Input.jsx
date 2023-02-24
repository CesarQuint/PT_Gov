import React from 'react'

function Input({name,value,set,type,error,disable}) {
  return (
    <div disabled={disable} className='inputSec'>
        <label htmlFor="">{name}:</label>
        <input className='a1' placeholder={`${name} section...`}  type={`${type}`}
        value={value}
        onChange={e=>set(e.target.value)}
        required={error}
        disabled={disable}
        />
    </div>
  )
}

export default Input