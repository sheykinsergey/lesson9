import React, { useCallback, useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
import set from '../../settings/settings'

const AuthComponent = () => {

  const [auth, setAuth] = useState({});
  useEffect(() => {
    const localStorageAuth = localStorage.getItem('auth');
    if (localStorageAuth) {
      setAuth(JSON.parse(localStorageAuth));
    }
  });
  const responseFacebook = useCallback((data) => {
    console.log(data);
    axios.post(`${set.url}/auth/facebook`, {
      access_token: data.accessToken,
    })
      .then((response) => {
        setAuth({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          user: parseJwt(response.data.accessToken),
        });
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
    
  })
  const handleGoogleAuth = useCallback((data) => {
    console.log(data);
    axios.post(`${set.url}/auth/google`, {
      access_token: data.accessToken,
    })
      .then((response) => {
        setAuth({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          user: parseJwt(response.data.accessToken),
        });
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  });
  console.log(auth);

  if (!auth.user) {
    return (
          <>
            <GoogleLogin
              clientId={set.googleId}
              onSuccess={handleGoogleAuth}
              onFailure={(errors) => {
                console.log(errors);
              }}
              cookiePolicy="single_host_origin"
            />
            <FacebookLogin
              appId={set.facebookId}
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
              version="3.1"
            />
          </>

    );
  }

  return (
    <div>
      <div>authorized</div>
      <div>{auth.user.user_id}</div>
      <div>{auth.user.Fullname}</div>
    </div>
  );
};

export default AuthComponent;

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};