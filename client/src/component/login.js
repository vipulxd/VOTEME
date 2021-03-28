import React from "react";
import {Redirect} from "react-router-dom";
import {login} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import {GoogleLogin} from "react-google-login";

import {refreshTokenSetup} from "../utils/refreshToken";
import Heading from "./heading";
import "../App.scss";

const clientId =
  "762522731657-49kr0hemp6f0fpk6vq72dn3qtvf6tke0.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.auth.loaded);
  // const userName = useSelector(state => state.auth.user);

  if (userStatus) {
    return <Redirect to="/dashboard" />;
  }
  const onSuccess = res => {
    dispatch(login(res.profileObj.email));
    localStorage.setItem("user", JSON.stringify(res.profileObj.email));
  };

  //   console.log("Login Success: currentUser:", res.profileObj.email);

  //   dispatch(login());
  //   console.log(userStatus);
  //   refreshTokenSetup(res);
  // };

  const onFailure = res => {
    console.log("Login failed: res:", res);
  };

  return (
    <div className="login-div">
      <Heading />
      <div className="login-button">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login to Vote"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </div>
  );
}

export default Login;
