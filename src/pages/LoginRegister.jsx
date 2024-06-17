import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

const LoginRegister = () => {
  const [stateAuthen, setStateAuthen] = useState(0);

  const renderAuthComponent = () => {
    switch (stateAuthen) {
      case 0:
        return <LoginForm />;
      case 1:
        return <RegisterForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <>
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
