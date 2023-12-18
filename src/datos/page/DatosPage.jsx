import { Link } from "react-router-dom";
import { getInputs } from "../helpers/getInputs"
import { useEffect } from "react";



export const DatosPage = () => {


  const {dataLocal} = getInputs()
  
  
  return (
    <>
      {
        dataLocal?.map(data =>(
          <div key={data.cc}>

            <h1>{`Nombre = ${data.nombre}`}</h1>
          </div>
        ))
      }

     <Link to={'/register'}><button> register </button></Link>
    </>
  )
}
