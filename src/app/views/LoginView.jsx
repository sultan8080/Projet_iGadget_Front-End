import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { URL_HOME } from "../constants/urls/urlFrontEnd";
import Login from "./../components/account/Login";
import {
  selectHasRole,
  selectIsLogged,
} from "./../redux-store/authenticationSlice";

/**
 * View/Page Login
 *
 * @author Peter Mollet
 */
const LoginView = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsLogged);
  const userRole = useSelector(selectHasRole);
  useEffect(() => {
    if (isAuthenticated) {
    }
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <Login className="" />
    </div>
  );
};

export default LoginView;
