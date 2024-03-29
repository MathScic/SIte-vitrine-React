import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Erreur 404</h2>
        <NavLink to="/">
          <h3>
            Retour à l'accueil <i class="fa-solid fa-house"></i>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
