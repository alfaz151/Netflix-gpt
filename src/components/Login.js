import { useState, useRef } from "react";
import Header from "./Header";
import { validateEmail, validatePassword } from "../utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { HOME_PAGE_BG_IMG_URL } from "../utils/constants";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [validateEmailMsg, setValidateEmailMsg] = useState("");
  const [validatePasswordMsg, setValidatePasswordMsg] = useState("");
  const [validateFullnameMsg, setValidateFullnameMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setErrorMsg("");
        console.log(user);
        const { uid, email, displayName, accessToken } = user;
        dispatch(addUser({
          uid, email, displayName, accessToken
        }))
      })
      .catch((e) => {
        console.log(e);
        setErrorMsg(e.message);
      });
  };

  const handleSignUp = (email, password, fullname) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setErrorMsg("");
        console.log(user);
        updateProfile(user, {
          displayName: fullname
        }).then(() => {
          const { uid, email, displayName, accessToken } = auth.currentUser;
          dispatch(addUser({
            uid, email, displayName, accessToken
          }))
        })
      })
      .catch((e) => {
        console.log(e);
        setErrorMsg(e.message);
      });
  };

  const handleSubmit = () => {
    setLoading(true);
    const valEmailMsg = validateEmail(email.current.value);
    const valPasswordMsg = validatePassword(password.current.value);

    setValidateEmailMsg(valEmailMsg);
    setValidatePasswordMsg(valPasswordMsg);

    if (!isSignForm && !fullname) {
      setValidateFullnameMsg("Field is required!");
      return;
    }

    if (valEmailMsg || valPasswordMsg) {
      return;
    }

    if (isSignForm) {
      handleSignIn(email.current.value, password.current.value);
    } else {
      handleSignUp(
        email.current.value,
        password.current.value,
        fullname.current.value
      );
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <img
        src={HOME_PAGE_BG_IMG_URL}
        alt="bg-img"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="m-4 p-4 w-3/12 bg-black text-white bg-opacity-70 flex flex-col"
        >
          <label className="p-2 text-xl font-bold">
            {isSignForm ? "Sign In" : "Sign Up"}
          </label>
          {isSignForm ? (
            ""
          ) : (
            <>
              <input
                ref={fullname}
                className="m-2 p-2 rounded-lg bg-gray-700 "
                type="text"
                placeholder="Fullname"
              ></input>
              <p className="text-xs px-2 text-red-500">{validateFullnameMsg}</p>
            </>
          )}
          <input
            ref={email}
            className="m-2 p-2 rounded-lg bg-gray-700 "
            type="text"
            placeholder="Email"
          ></input>
          <p className="text-xs px-2 text-red-500">{validateEmailMsg}</p>
          <input
            ref={password}
            className="m-2 p-2 rounded-lg bg-gray-700"
            type="password"
            placeholder="Password"
          ></input>
          <p className="text-xs px-2 text-red-500">{validatePasswordMsg}</p>
          <button
            className="m-2 p-2 bg-red-500 rounded-lg "
            onClick={handleSubmit}
          >
            {!loading ? (isSignForm ? "Sign in" : "Sign up") : <><img className = "m-1 p-1" src="https://www.svgrepo.com/svg/423290/loading" alt="loading"/></> }
          </button>
          <p className="text-xs px-2 text-red-500">{errorMsg}</p>
          <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignForm ? "New to Netflix? Sign Up" : "Already a user, Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
