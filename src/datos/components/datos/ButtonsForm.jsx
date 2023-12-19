import React from 'react'

export const ButtonsForm = ({onReset}) => {
  return (
    <div className='buttons-form'>
        <button className='btn btn-success'>Registrar</button>
        <button onClick={onReset} className='btn btn-danger' type='button'>Reset</button>
    </div>
  )
}
