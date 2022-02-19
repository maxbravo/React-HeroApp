import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/autContext";
import { types } from "../../types/types";

export const LoginPage = () => {
  const action = {
    type: types.login,
    payload: {
      name: "Max Bravo", //no es necesario mandar el logged porque eso ya lo hace la lógica del reducer
    },
  };

  const { dispatchUser } = useContext(AuthContext); // obtengo la referencia al Contexto y traigo solo la funcion de dispatch

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatchUser(action);

    const lastpath = localStorage.getItem('lastpath') || '/marvel';

    navigate(lastpath, {
      replace: true,
    }); // hago que regrese a la pagina anterior y seteo el replace en true para que no tenga opcion de go back con flecha del navegaror
  };

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
