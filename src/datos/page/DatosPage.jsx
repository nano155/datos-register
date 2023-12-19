import { Link } from "react-router-dom";
import { getInputs } from "../helpers/getInputs"
import { Update } from "@mui/icons-material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect, useState } from "react";


export const DatosPage = () => {
  const { onDelete, dataLocal} = getInputs()

  
  return (
    <>
      <div className="table container">
        <table >
          <thead>
            <tr >
              <th>
                Nombre
              </th>
              <th>
                Apellidos
              </th>
              <th>
                Email
              </th>
              <th>
                Birthday
              </th>
              <th>
                Cc
              </th>
              <th></th>
            </tr>
            {
              dataLocal?.map(data => (
                <tr key={data.cc}>
                  <td>{data.nombre}</td>
                  <td>{data.apellidos}</td>
                  <td>{data.email}</td>
                  <td>{data.birthday} </td>
                  <td>{data.cc} </td>
                  <td><Link to={`/update/${data.cc}`}><span><Update fontSize="small" sx={{color:'blue'}}/></span></Link> <span dataid={data.cc} onClick={onDelete}><HighlightOffIcon fontSize="small" sx={{color:'red'}}/></span></td>
                </tr>
              ))
            }
          </thead>
        </table>
      <Link to={'/register'}><button><strong>Register</strong></button></Link>
      </div>

    </>
  )
}
