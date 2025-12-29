import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate()

  const user = useSelector((state) => state.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        navigate("/error")
      })
  }

  return (
    <>
      <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user ? <div className="flex justify-between items-center">
          <img className="w-10 h-10"
            src="https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg"
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
