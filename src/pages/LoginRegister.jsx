import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginRegister = () => {
  const [stateAuthen, setStateAuthen] = useState(0);

  const renderAuthComponent = () => {
    switch (stateAuthen) {
      case 0:
        return <LoginForm />;
      case 1:
        return <RegisterForm backLogin={backLogin} />;
      default:
        return <LoginForm />;
    }
  };
  const backLogin = () => {
    setStateAuthen(0)
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {" "}
      <div>{renderAuthComponent()}</div> ,{" "}
      <div className="pt-5 flex flex-col items-center gap-5">
        <button onClick={() => setStateAuthen((value) => (value == 0 ? 1 : 0))}>
          Switch {stateAuthen ? "Login" : "Register"}
        </button>
        <Link className="p-4 bg-red-500 rounded-lg text-white font-medium" to="/">Homepage</Link>
      </div>{" "}
    </>
  );
};

export default LoginRegister;
