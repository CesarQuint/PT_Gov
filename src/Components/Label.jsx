import React from 'react'

function Label({label}) {
    const {type,msg}=label
  return (
    <p className={`label subHead ${type}`}>
        {msg}
    </p>
  )
}

export default Label