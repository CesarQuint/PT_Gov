import {useState} from 'react'
import Alerta from './Alerta'

function Form() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const [alerta,setAlerta]=useState({})

    const handleSubmit=e=>{
        e.preventDefault()
        if([password,name].includes('')){
            setError(true)
            setAlerta({
                msg:'Todos los campos son Obligatios',
                type:'error'
            })
        return
        }
        if(password.length<6){
            setAlerta({
                msg:'La contraseña es muy corta ',
                type:'advice'
            })
            return
        }
        setAlerta({
            msg:'Proceso realizado Correctamente',
            type:'success'
        })
        
        console.log('Mandando');
    }

    const {msg}=alerta
  return (
    <div className='form'>
        <form onSubmit={handleSubmit} action="">
            {msg &&<Alerta alerta={alerta} setAlerta={setAlerta}/>}
            <div className='inputSec'>
                <label htmlFor="">Name:</label>
                <input className='a1'  type="text" 
                value={name}
                onChange={e=>setName(e.target.value)}
                required={error}
                />
            </div>
            <div className='inputSec'>
                <label >Password</label>
                <input className='a1' placeholder='Password' type="password" 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                required={error}/>
            </div>
            <div className='inputSec  disabled'>
                <label disabled >Disabled</label>
                <input className='a1' placeholder='Password' type="password" 
                required={error}
                disabled/>
            </div>
            <button type="submit">Subir</button>
        </form>
    </div>
  )
}

export default Form