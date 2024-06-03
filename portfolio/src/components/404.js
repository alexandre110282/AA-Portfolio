import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/404.scss";
import errorgif from '../assets/404.gif';

function Error404() {
  return (
    <div className="error">
      <img src={errorgif} className="errorgif" alt="Error 404 GIF" />
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error_link">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
}

export default Error404