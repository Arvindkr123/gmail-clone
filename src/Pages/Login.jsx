import React from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { auth, provider } from "../configFirebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signIn } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const { displayName, email, photoURL } = user;
        console.log(displayName, email, photoURL);
        dispatch(
          signIn({
            displayName,
            email,
            photoURL,
          })
        );
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="login_wrapper">
      <div className="login__img">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?size=690:388"
          alt=""
        />
        <button className="login-btn" onClick={login}>
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
