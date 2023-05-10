import { useState } from "react";
import "./RegUsuarios.css";
import CodeText from "../CodeText/CodeText";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const RegUsuarios = () => {
  const [name, actualizarName] = useState("");
  const [lastname, actualizarLastName] = useState("");
  const [date, actualizarDate] = useState("");
  const [country, actualizarCountry] = useState("");
  const [email, actualizarEmail] = useState("");
  const [correspondence, actualizarCorrespondence] = useState("");
  const [password, actualizarPass] = useState("");
  const [dni, actualizarDni] = useState("");

  //const sendInfo = (event) => {
  // event.preventDefault();
  const datosAEnviar = {
    nombre: name,
    apellido: lastname,
    //date: date,
    //country: country,
    correo: email,
    //correspondence: correspondence,
    password: password,
    dni : dni
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    JSON.stringify(datosAEnviar);
    if (!e.target.checkValidity()) {
      console.log("No enviar");
    } else {
      let res = axios.post(
        "http://localhost:3001/agregarCliente",
        datosAEnviar
      );
      console.log(res.datosAEnviar);
    }
  };

  const handleInputChange = (e) => {
    let { name, valor } = e.target;
    let newDatos = { ...datos, [name]: valor };
    setDatos(newDatos);
  };

  return (
    <section className="login-service">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSumbit}>
        <CodeText
          title="Nombre de usuario"
          required
          placeHolder="Usuario"
          valor={name}
          actualizarValor={actualizarName}
        ></CodeText>
        <CodeText
          title="Apellido"
          required
          placeHolder="Apellido"
          valor={lastname}
          actualizarValor={actualizarLastName}
        ></CodeText>
        <CodeText
          title="Numero de Documento"
          required
          placeHolder="Numero de Documento "
          valor={dni}
          actualizarValor={actualizarDni}
        ></CodeText>
        <CodeText
          type="date"
          title="Fecha de Nacimiento"
          //required
          valor={date}
          actualizarValor={actualizarDate}
        ></CodeText>
        <CodeText
          title="Lugar de Nacimiento"
          //required
          placeHolder="Ciudad de Nacimiento"
          valor={country}
          actualizarValor={actualizarCountry}
        ></CodeText>
        <CodeText
          title="Correo Electronico"
          required
          placeHolder="Correo Electronico"
          valor={email}
          actualizarValor={actualizarEmail}
        ></CodeText>
        <CodeText
          title="Direccion de Correspondencia"
          //required
          placeHolder="Direccion de Correspondencia"
          valor={correspondence}
          actualizarValor={actualizarCorrespondence}
        ></CodeText>
        <CodeText
          type="password"
          title="Contraseña"
          required
          placeHolder="Contraseña"
          valor={password}
          actualizarValor={actualizarPass}
        ></CodeText>
        <div className="button-division">
          <Button>Registrarse</Button>
        </div>
      </form>
      <div className="help-container">
        <Link>
          <p> Has olvidado tu contraseña?</p>
        </Link>
        <Link>
          <p> Has olvidado tu nombre de usuario?</p>
        </Link>
      </div>
    </section>
  );
};

export default RegUsuarios;
