import { useState } from "react";
import "./Log.css";
import CodeText from "../CodeText/CodeText";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Log = () => {
  const [correo, actualizarCorreo] = useState("");
  const [password, actualizarPass] = useState("");

  //const sendInfo = (event) => {
  //event.preventDefault();
  const datosAEnviar = {
    correoU: correo,
    contrasenaU: password,
  };
  const handleInputChange = (e) => {
    let { name, valor } = e.target;
    let newDatos = { ...datos, [name]: valor };
    setDatos(newDatos);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("No enviar");
    } else {
      let res = axios.post("http://localhost:3001/login", datosAEnviar);
      console.log(res.datosAEnviar);
    }
  };

  return (
    <section className="login-service">
      <h2>Iniciar sesion</h2>
      <form onSubmit={handleSumbit}>
        <CodeText
          title="Correo Electronico"
          required
          placeHolder="Correo"
          valor={correo}
          actualizarValor={actualizarCorreo}
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
          <Button>Iniciar sesion</Button>
          <Button>Nuevo usuario</Button>
        </div>
      </form>
      <div className="help-container">
        <Link to="/">
          <p> Has olvidado tu contraseña?</p>
        </Link>
        <Link to="/">
          <p> Has olvidado tu nombre de usuario?</p>
        </Link>
      </div>
    </section>
  );
};

export default Log;
