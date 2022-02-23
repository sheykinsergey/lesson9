import React, { useCallback, useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
import set from '../../settings/settings'

const AuthComponent = () => {

  const [auth, setAuth] = useState({});
  useEffect(() => {
    const localStorageAuth = localStorage.getItem(auth);
    console.log('localStorageAuth');
    console.log(localStorageAuth);
    if (localStorageAuth) {
      setAuth(JSON.parse(localStorageAuth));
    }
  });
  const responseFacebook = useCallback((data) => {
    console.log(data);
    axios.post(`${set.url}/auth/facebook`, {
      access_token: data.accessToken,
    })
      .then((res) => {
        setAuth({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          user: parseJwt(res.data.accessToken),
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
      .then((res) => {
        // setAuth(res.data)
        setAuth({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          user: parseJwt(res.data.accessToken),
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
      <div>user: id {auth.user.user_id}</div>
      <div>name: {auth.user.Fullname}</div>
      <div>accessToken: {auth.accessToken}</div>
      <div>refreshToken: {auth.refreshToken}</div>
    </div>
  );
};

export default AuthComponent;

const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split('.')[1]));
//   } catch (e) {
//     return null;
//   }
// };