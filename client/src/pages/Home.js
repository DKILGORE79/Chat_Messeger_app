// import Nav from "../components/Nav";
// import AuthModal from "../components/AuthModal.js";
import { useState } from "react";
import { useCookies } from "react-cookie";
import whiteLogo from "../images/like-mindz.png";
import colorLogo from "../images/color-logo-full.png";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie("UserId", cookies.UserId);
      removeCookie("AuthToken", cookies.AuthToken);
      window.location.reload();
      return;
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    // <div className="overlay">
    //   <Nav
    //     authToken={authToken}
    //     minimal={false}
    //     setShowModal={setShowModal}
    //     showModal={showModal}
    //     setIsSignUp={setIsSignUp}
    //   />
    //   <div className="home">
    //     <img className="Home logo-container" src={colorLogo} alt="logo" />
    //     <button className="primary-button" onClick={handleClick}>
    //       {authToken ? "Signout" : "Create Account"}
    //     </button>

    //     {showModal && (
    //       <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
    //     )}
    //   </div>
    // </div>
    <></>
  );
};
export default Home;
