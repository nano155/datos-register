import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

export const getInputs = () => {
  const [dataLocal, setDataLocal] = useState(() => {
    const initialArray = JSON.parse(localStorage.getItem("data")) || [];
    return initialArray;
  });

  const initialValue = {
    nombre: "",
    apellidos: "",
    email: "",
    birthday: "",
    cc: "",
    password: "",
    rePassword: "",
  };
  const [input, setInput] = useState(initialValue);
  const { nombre, apellidos, email, password, rePassword, birthday, cc } =
    input;

    const navigate = useNavigate()

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const existe =
      dataLocal.some((data) => data.email === email) ||
      dataLocal.some((data) => data.cc === cc);
    if (
      nombre.length <= 2 ||
      apellidos.length <= 2 ||
      email <= 2 ||
      cc.length <= 2 ||
      password.length <= 2 ||
      rePassword.length <= 2
    ) {
      return Swal.fire({
        title: "Error!",
        text: "Los campos deben tener mas de 2 caracteres!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (password !== rePassword) {
      return Swal.fire({
        title: "Error!",
        text: "Los campos password y repassword deben ser iguales!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (existe) {
      return Swal.fire({
        title: "Error!",
        text: "Los campos email y cc ya existen!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    Swal.fire({
      title: "Buen trabajo!",
      text: "Registro exitoso!",
      icon: "success",
      confirmButtonText: "Ok",
    });
    setDataLocal([...dataLocal, input]);
    setInput(initialValue);
  };
  const onReset = () => {
    setInput(initialValue);
  };
  const setValues = (values) => {
    setInput(values);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dataLocal));
  }, [dataLocal]);

  const datos = [
    {
      name: "nombre",
      type: "text",
      input: nombre,
    },
    {
      name: "apellidos",
      type: "text",
      input: apellidos,
    },
    {
      name: "email",
      type: "email",
      input: email,
    },
    {
      name: "birthday",
      type: "date",
      input: birthday,
    },
    {
      name: "cc",
      type: "number",
      input: cc,
    },
    {
      name: "password",
      type: "password",
      input: password,
    },
    {
      name: "rePassword",
      type: "password",
      input: rePassword,
    },
  ];

  const onUpdate = (e) => {
    e.preventDefault();
    if (
      nombre.length <= 2 ||
      apellidos.length <= 2 ||
      email <= 2 ||
      cc.length <= 2 ||
      password.length <= 2 ||
      rePassword.length <= 2
    ) {
      return Swal.fire({
        title: "Error!",
        text: "Los campos deben tener mas de 2 caracteres!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (password !== rePassword) {
      return Swal.fire({
        title: "Error!",
        text: "Los campos password y repassword deben ser iguales!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    Swal.fire({
      title: "Buen trabajo!",
      text: "Actualizacion exitosa!",
      icon: "success",
      confirmButtonText: "Ok",
    });

    setDataLocal(
      dataLocal?.map((data) => {
        if (data.cc === cc) {
          return input;
        }
        return data;
      })
    );
    setTimeout(() => {     
      navigate('/')
    }, 1000);
  };

  const onDelete = (e) =>{
    const { currentTarget }= e
    setDataLocal(dataLocal?.filter(data =>currentTarget.getAttribute('dataid') !== data.cc));
  }

  return {
    datos,
    onChange,
    input,
    onHandleSubmit,
    dataLocal,
    onReset,
    setValues,
    setDataLocal,
    initialValue,
    setInput,
    onUpdate,
    onDelete
  };
};
