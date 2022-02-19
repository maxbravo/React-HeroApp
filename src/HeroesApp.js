import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/autContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false }; //localStorage solo Strings, y si no hay nada regreso como no logeado
};

export const HeroesApp = () => {
  const [user, dispatchUser] = useReducer(authReducer, {}, init); // en este punto todos los componentes tiene acceso al Contexto

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user)); // grabo en el localStorage el objeto hecho string
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatchUser,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};
