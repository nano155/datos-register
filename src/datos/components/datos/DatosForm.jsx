import { useParams } from 'react-router-dom'
import { getInputs } from '../../helpers/getInputs'
import { ButtonsForm } from './ButtonsForm'
import { Input } from './Input'
import { useEffect, useState } from 'react'


export const DatosForm = () => {
  const [disabled, setDisabled] = useState(false)

  const { datos, onChange, onHandleSubmit, onReset, setValues, dataLocal, onUpdate } = getInputs()

  const { id } = useParams();

 
  useEffect(() => {
    if (id){
      setValues(dataLocal?.find(data => data.cc === id))
      setDisabled(true)
    }else{
      setDisabled(false)

    }

  }, [id])


  return (
    <div className='container form'>
      <form onSubmit={disabled ?onUpdate :onHandleSubmit} >
        {
          datos?.map(data => {
            const { name, type, input } = data
            const nameN = name.replace(name[0], name.charAt().toUpperCase())
            return <Input key={name} onchange={onChange} input={input} nameN={nameN} name={name} type={type} variable={disabled && name === 'cc' || disabled && name === 'email'  ? true : false} />
          }
          )
        }
        {
          disabled ?<button className='btn btn-success fullwidth' onClick={onUpdate}> Actualizar</button> : <ButtonsForm onReset={()=>onReset} />
        }  
      </form>
    </div>
  )
}
