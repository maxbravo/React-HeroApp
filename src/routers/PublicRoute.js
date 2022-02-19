import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/autContext';

export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);

      return !user.logged // pregunto si el usuario no está logeado
  ?  children // si no está logeado muestro los componentes hijos o sea la pantalla de login
  : <Navigate to='/marvel' /> // so no está logeado lo mando al login
}
