import React from 'react'

export const Input = ({name, type, nameN, onchange, input}) => {
  return (
    <>
    <label htmlFor={name}>{nameN}</label>
    <input name={name} onChange={onchange} value={input} placeholder={`Ingrese su ${name}`} type={type} required />
    </>
  )
}
