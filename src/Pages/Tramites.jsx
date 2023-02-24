import React from 'react'
import Form from '../Components/Form'
import Options from '../Components/Options'
import Directorio from '../Components/Directorio'
import Label from '../Components/Label'
import Tramite_Ser from '../Components/Tramite_Ser'


/* !!Contenido de un Label
  const example={
    msg:'Default',
    type:'error'
  }
  */
 /**Contenido de un Directorio
  <Directorio
        contacto={'Prueva 1'}
        lugar={
          {ubicacion:'Centro Mexioc',
          direccion:'#1224 dsadee sdcsa Acdbc'}
        }
        telefonos={[
          '123 456 789','987 654 321'
        ]}
        
        />
   
  */

function Tramites() {
  
  return (
    <>  
        <Tramite_Ser
          description={{
            name:'Titulo de Preva',
            servicio:'Secretaria de Ayuntamiento'
          }}
        />
        <Form/>
        <Options/>
    </>
  )
}

export default Tramites