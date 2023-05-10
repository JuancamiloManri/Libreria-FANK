import image from "../../../public/Imgs/outline-account.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo-ref-home">
          <img src="/logo_fact.png" alt="Fact" />
        </Link>
      </div>
      <nav className="menu-header">
        <ul>
          <li className="menu-item">Catalogo</li>
          <li className="menu-item">
            <Link to="/usersAdminReg.jsx">Nuevo admin</Link>
          </li>
          <li className="menu-item">
            <Link to="/UsersReg.jsx">Nuevo usuario</Link>
          </li>
          <li className="menu-item">
            <Link to="/BookAdd.jsx">Añadir Libro</Link>
          </li>
          <li className="menu-item">
            <Link to="/LoginUsers.jsx">
              <img src={image} alt="icon-acount" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
