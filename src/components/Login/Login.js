import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./Login.css";

// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "./firebase.config";
import { UserContext} from "../../App";
import { useHistory, useLocation } from "react-router";

const firebaseInitializer = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};
firebaseInitializer();

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const {setLoggedInUser} = useContext(UserContext)

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    photoUrl: "",
    password: "",
    password1: "",
    password2: "",
    error: "",
    emailError: "",
    passError: "",
    success: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.password1 === user.password2) {
      const newUserInfo = { ...user };
      newUserInfo.error = "";
      newUserInfo.password = user.password1;
      setUser(newUserInfo);
    } else if (newUser && user.password1 !== user.password2) {
      const newUserInfo = { ...user };
      newUserInfo.password = "";
      newUserInfo.error = "Password don't match";
      newUserInfo.success = false;
      setUser(newUserInfo);
    } else if (!newUser) {
      const newUserInfo = { ...user };
      newUserInfo.error = "";
      newUserInfo.password = user.password1;
      newUserInfo.success = false;
      setUser(newUserInfo);
    }
    if (!user.email) {
      const newUserInfo = { ...user };
      newUserInfo.error = "Please Enter a valid Email";
      setUser(newUserInfo);
    } else if (!user.password1) {
      const newUserInfo = { ...user };
      newUserInfo.error =
        "Please Enter a valid Password (minimum 5 characters)";
      setUser(newUserInfo);
    }

    if (
      newUser &&
      user.name &&
      user.email &&
      user.password === user.password2
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          updateUserName(user.name);
          console.log(res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.name = user.name;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = errorMessage;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password1) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password1)
        .then((res) => {
          console.log(res);
          const { email, displayName } = res.user;
          const newUserInfo = { ...user };
          newUserInfo.isLoggedIn = true;
          newUserInfo.name = displayName;
          newUserInfo.error = "";
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser({
            email: email,
            name: displayName,
            isLoggedIn: true,
          });
          history.replace(from);
        })
        .catch((error) => {
          console.log(error.message);
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    console.log(user);
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        // Update successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleBlur = (e) => {
    const newUserInfo = { ...user };
    newUserInfo.error = "";
    setUser(newUserInfo);
    console.log(e.target.value);
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      if (isFormValid) {
        const newUserInfo = { ...user };
        newUserInfo.error = "";
        setUser(newUserInfo);
      }
    }
    if (e.target.name === "password1") {
      isFormValid = e.target.value.length > 4;
    }
    if (e.target.name === "password2") {
      isFormValid = e.target.value.length > 4;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    } else {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = "";
      setUser(newUserInfo);
    }
  };

  const handleGooglSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        const { displayName, email } = res.user;
        const newUserInfo = { ...user };
        newUserInfo.name = displayName;
        newUserInfo.email = email;
        newUserInfo.isLoggedIn = true;
        setUser(newUserInfo);
        setLoggedInUser({
          email: email,
          name: displayName,
          isLoggedIn: true,
        });
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...user };
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
      });
  };

  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        console.log(res);
        setUser({
          isLoggedIn: true,
          name: displayName,
          email,
        });
        setLoggedInUser({
          email: email,
          name: displayName,
          isLoggedIn: true,
        });
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...user };
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row  d-flex justify-content-center">
        <div className="col-md-5">
          <div className="my-form">
            <h3>{newUser ? "Create an account" : "Login"}</h3>
            <form onSubmit={handleSubmit}>
              {newUser && (
                <div className="input-my-group my-3">
                  <input
                    onBlur={handleBlur}
                    className="inp-style"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name"
                  />
                </div>
              )}
              <div className="input-my-group my-3">
                <input
                  onBlur={handleBlur}
                  className="inp-style"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Username or Email"
                />
              </div>
              <div className="input-my-group my-3">
                <input
                  onBlur={handleBlur}
                  className="inp-style"
                  type="password"
                  name="password1"
                  id=""
                  placeholder="Password"
                />
              </div>
              {newUser && (
                <div className="input-my-group my-3">
                  <input
                    onBlur={handleBlur}
                    className="inp-style"
                    type="password"
                    name="password2"
                    id=""
                    placeholder="Confirm Password"
                  />
                </div>
              )}

              {user.error && (
                <p className="d-block text-center error">{user.error}</p>
              )}

              {newUser && user.success && (
                <p className="d-block text-center success">
                  Account created Successfully
                </p>
              )}

              <input
                type="submit"
                className="inp-style my-btn-submit mt-3"
                value={newUser ? "Create an Account" : "Login"}
              />
            </form>
            {newUser ? (
              <p className="d-block text-center">
                <small>
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setNewUser(!newUser);
                      const newUserInfo = { ...user };
                      newUserInfo.error = "";
                      setUser(newUserInfo);
                    }}
                    className="mini-btn"
                  >
                    Login
                  </button>
                </small>
              </p>
            ) : (
              <p className="d-block text-center">
                <small>
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setNewUser(!newUser);
                      const newUserInfo = { ...user };
                      newUserInfo.error = "";
                      setUser(newUserInfo);
                    }}
                    className="mini-btn"
                  >
                    Create an account
                  </button>
                </small>
              </p>
            )}

            <p className="d-block text-center">or</p>
            <button
              onClick={handleGooglSignIn}
              className="inp-style my-btn-google d-flex align-items-center justify-content-center"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faGoogle}
              ></FontAwesomeIcon>{" "}
              <span className="ms-3">Continue with Google</span>
            </button>
            <button
              onClick={handleFbSignIn}
              className="inp-style my-btn-facebook d-flex align-items-center justify-content-center"
            >
              <FontAwesomeIcon
                className="icon ms-3"
                icon={faFacebook}
              ></FontAwesomeIcon>{" "}
              <span className="ms-3"> Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




// import React, { useContext, useState } from 'react';
// import { useForm } from "react-hook-form";
// import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { UserContext } from "../../App";
// import './Login.css';
// import { createUserWithEmailAndPassword, handleFbSignIn, handleGhSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

// const Login = () => {
//     const { setLoggedInUser } = useContext(UserContext);
//     const [newUser, setNewUser] = useState(false);

//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };

//     const { register, handleSubmit } = useForm();

//     const [user, setUser] = useState({
//         isSignedIn: false,
//         userName: '',
//         email: '',
//         userPhoto: ''
//     });
//     setLoggedInUser(user);

//     initializeLoginFramework();

//     const googleSignIn = () => {
//         handleGoogleSignIn()
//             .then(res => {
//                 setUser(res);
//                 history.replace(from);
//             });
//     }

//     const fbSignIn = () => {
//         handleFbSignIn()
//             .then(res => {
//                 setUser(res);
//                 history.replace(from);
//             });
//     }

//     const GhSignIn = () => {
//         handleGhSignIn()
//             .then(res => {
//                 setUser(res);
//                 history.replace(from);
//             });
//     }

//     const onSubmit = data => {
//         const { name, email, password } = data;

//         if (newUser && name && email && password) {
//             createUserWithEmailAndPassword(name, email, password)
//                 .then(res => {
//                     res.userName = name;
//                     setUser(res);
//                     history.replace(from);
//                 })
//         }

//         if (!newUser && email && password) {
//             signInWithEmailAndPassword(email, password)
//                 .then(res => {
//                     setUser(res);
//                     history.replace(from);
//                 })
//         }
//     }

//     return (
//         <div className="login-contain">
//             <div className={newUser ? "login-container right-panel-active" : "login-container"} id="container">
//                 <div className={newUser ? "form-container sign-up-container" : "form-container sign-in-container"}>
//                     <form action="" onSubmit={handleSubmit(onSubmit)}>
//                         <h1>{newUser ? "Create Account" : "Sign in"}</h1>
//                         <div className="social-container">
//                             <Link onClick={fbSignIn} className="social">
//                                 <FaFacebookF />
//                             </Link>
//                             <Link onClick={googleSignIn} className="social">
//                                 <FaGoogle />
//                             </Link>
//                             <Link onClick={GhSignIn} className="social">
//                                 <FaGithub />
//                             </Link>
//                         </div>
//                         <span>{newUser ? "or use your email for registration" : "or use your account"}</span>
//                         {newUser &&
//                             <input
//                                 name="name"
//                                 type="text"
//                                 ref={register({ required: true })}
//                                 placeholder="Name"
//                                 required />}
//                         <input
//                             name="email"
//                             type="email"
//                             ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
//                             placeholder="Email"
//                             required />
//                         <input
//                             name="password"
//                             type="password"
//                             ref={register({ required: true })}
//                             placeholder="Password"
//                             required />
//                         {!newUser && <Link>Forgot your password?</Link>}
//                         <button type="submit">{newUser ? "Sign Up" : "Sign In"}</button>
//                     </form>
//                 </div>
//                 <div className="overlay-container">
//                     <div className="overlay">
//                         <div className="overlay-panel overlay-left">
//                             <h1>Welcome Back!</h1>
//                             <p>To keep connected with us please login with your personal info</p>
//                             <button className="ghost" id="signIn" onClick={() => setNewUser(false)}>Sign In</button>
//                         </div>
//                         <div className="overlay-panel overlay-right">
//                             <h1>Hello, Friend!</h1>
//                             <p>Enter your personal details and start journey with us</p>
//                             <button className="ghost" id="signUp" onClick={() => setNewUser(true)}>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;