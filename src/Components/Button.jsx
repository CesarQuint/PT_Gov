import React from 'react'
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";

function Button({type}) {
  return (
    <button disabled={false} className={` descrip ${type}`} type="submit">Ver ahora <Arrow/></button>
  )
}

export default Button