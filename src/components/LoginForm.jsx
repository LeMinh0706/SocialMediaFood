import React, { useState } from "react";
import { postLogin } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { doLogin } from "../action/useAction";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleemailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleLogin = async () => {
    let res = await postLogin(email, password);
    console.log("Check res: ", res);
    console.log("status:", res.status);

    if (res && res.status === 201) {
      dispatch(doLogin(res.data));
      console.log(res.data.message);
      toast.success(res.data.message);
      res.data.data.role_id === 2 ? navigate("/admin") : navigate("/");
    }
    else if (res.status === 0) {
      toast.error("Kiểm tra đường truyền")
    }
    else {
      toast.error("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <form
      className="pt-20 flex flex-col items-center gap-5"
      onSubmit={handleSubmit}
    >
      <p className="text-lg font-semibold border-b-2 border-black">LOGIN</p>
      <div className="w-1/4">
        <label className="text-start block" htmlFor="user">
          Email:
        </label>
        <input
          id="user"
          className="w-full text-sm border-violet-500 ml-2 rounded-lg p-2 border-2"
          type="email"
          value={email}
          onChange={handleemailChange}
        />
      </div>
      <div className="w-1/4">
        <label className=" text-start block" htmlFor="pass">
          Password:
        </label>
        <input
          id="pass"
          className="w-full text-sm border-violet-500 ml-2 rounded-lg p-2 border-2 mt-3"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className="mt-3 p-2 bg-fuchsia-300 border text-lg font-medium rounded-md text-slate-700"
        type="submit"
        onClick={() => handleLogin()}
      >
        Đăng nhập
      </button>
    </form>
  );
}

export default LoginForm;
