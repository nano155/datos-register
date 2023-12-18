import {useEffect, useState } from "react"

const initialArray = JSON.parse(localStorage.getItem('data'))||[]


export const getInputs = () => {

  const [dataLocal, setDataLocal] = useState(initialArray)

  const initialValue = {
    nombre:'',
    apellidos:'',
    email:'',
    birthday:'',
    cc:'',
    password:'',
    rePassword:''
  }
  const [input, setInput] = useState(initialValue)
  const {nombre, apellidos, email, password, rePassword, birthday, cc} = input

   const onChange = ({target})=>{
    const {name, value} = target
   setInput({
    ...input,
    [name]:value 
   })
   }

   const onHandleSubmit = (e)=>{
    e.preventDefault()
    setDataLocal([...dataLocal, input])
    setInput(initialValue)
  } 
  const onReset = ()=>{
    setInput(initialValue);
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(dataLocal))

  }, [dataLocal])
  
    const datos =[{
        name: 'nombre',
        type: 'text',
        input: nombre,
      }, 
    {
        name: 'apellidos',
        type: 'text',
        input: apellidos
      }, 
    {
        name: 'email',
        type: 'email',
        input: email
      }, 
      {
        name: 'birthday',
        type: 'date',
        input: birthday
      }, 
      {
        name: 'cc',
        type: 'number',
        input: cc
      }, 
    {
        name: 'password',
        type: 'password',
        input: password
      }, 
      {
        name: 'rePassword',
        type: 'password',
        input: rePassword
    }
       
    ]
    
      return{
        datos,
        onChange, 
        input,
        onHandleSubmit,
        dataLocal,
        onReset
      }
}
