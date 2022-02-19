import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/autContext';

export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    const {pathname, search} = useLocation();

    localStorage.setItem('lastpath', pathname + search);

      return user.logged // pregunto si el usuario está logeado
  ?  children // si está logeado muestro los componentes hijos
  : <Navigate to='/login' /> // so no está logeado lo mando al login
}
