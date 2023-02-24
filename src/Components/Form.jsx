import {useState} from 'react'
import Alerta from './Alerta'
import Input from './Input'
import Button from './Button'

function Form() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const [alerta,setAlerta]=useState({
        msg:'Prueva de Default',
        type:'Normal'
    })
    const[disable,setDisable]=useState(true)

    //TODO: Agregar funcionalidad Disabled'

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

            <Input
            name={'Nombre'} value={name} set={setName} type={'text'} error={error}
            />
          
           <Input
           name={'Password'} value={password} set={setPassword} type={'password'} error={error}
           />
            <Input
            name={'Disabled'} type={'text'} error={error} disable={disable}
            />
            <Input
            name={'Search'} value={''} set={''} type={'search'} error={''}
            />
            {/*Seccion de eleccion Multiple */}
           <Button type={'primario'}/>
           <Button type={'secundario'}/>
           <Button type={'terciario'}/>
        </form>
    </div>
  )
}

export default Form