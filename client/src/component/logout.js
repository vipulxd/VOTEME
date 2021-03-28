import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {GoogleLogout} from "react-google-login";
import {Redirect} from "react-router-dom";
import {logout} from "./../redux";
import "../App.scss";
const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout() {
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.auth.loaded);

  const onSuccess = () => {
    localStorage.clear("user");
    dispatch(logout());
  };

  if (userStatus != true) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="login-button">
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        ></GoogleLogout>
      </div>
    </div>
  );
}

export default Logout;
