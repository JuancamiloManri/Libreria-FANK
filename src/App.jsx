// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header/Header";
// import Formulario from './components/Form/Form'
// import MiOrg from './components/MiOrg'
import Log from "./components/Log/index";
import Error404 from "./Pages/Page404";
import Home from "./Pages/Home";
import LoginUsers from "./Pages/LoginUsers";
import UsersAdminReg from "./Pages/UsersAdminReg";
import UsersReg from "./Pages/UsersReg";
import BookAdd from "./Pages/BookAdd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  // const [mostrarFormulario, actualizarMostrar] = useState(false)

  // const cambiarMostrar = () => {
  //   actualizarMostrar(!mostrarFormulario)
  // }

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <h1>hello world</h1>
        <Route path="/UsersReg.jsx" element={<UsersReg />} />
        <Route path="/LoginUsers.jsx" element={<LoginUsers />} />
        <Route path="/usersAdminReg.jsx" element={<UsersAdminReg />} />
        <Route path="/BookAdd.jsx" element={<BookAdd />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
    // <section className='container-log-users'>
    //   <Log></Log>
    // </section>
    // <>
    // <Header></Header>
    // { mostrarFormulario === true? <Formulario></Formulario> : <div></div>}
    // <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
    // </>
  );
}

export default App;
