import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .catch((error) => {
        console.log(error);
        navigate("/error")
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, email, displayName } = user;
        dispatch(addUser({ accessToken, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })

    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src={NETFLIX_LOGO}
          alt="logo"
        />
        {user ? <div className="flex justify-between items-center">
          <img className="w-10 h-10"
            src={USER_LOGO}
            alt="userLogo"
          />
          <div className="flex flex-col mx-1">
            <label className="font-bold text-white">{user.displayName}</label>
            <button className="mx-2 font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
          </div></div> : ""}

      </div>
    </>
  );
};

export default Header;
