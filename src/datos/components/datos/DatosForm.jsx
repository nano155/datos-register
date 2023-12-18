import { getInputs } from '../../helpers/getInputs'
import { ButtonsForm } from './ButtonsForm'
import { Input } from './Input'

export const DatosForm = () => {

  const { datos, onChange, onHandleSubmit, onReset} = getInputs()




  return (
    <div className='container form'>
      <form onSubmit={onHandleSubmit} >
        {
          datos?.map(data => {
            const { name, type, input } = data
            const nameN = name.replace(name[0], name.charAt().toUpperCase())
            return <Input key={name} onchange={onChange} input={input} nameN={nameN} name={name} type={type} />
          }
          )
        }
        <ButtonsForm onReset={onReset}/>
      </form>
    </div>
  )
}
