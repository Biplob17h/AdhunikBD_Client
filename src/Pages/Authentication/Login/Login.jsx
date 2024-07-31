import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/UserContext";
import { MainApiLink } from "../../../App";
import setTokenToLocalStorage from "../../../Components/SetTokenToLocalStroge";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { setRefresh, refresh } = useContext(AuthContext);

  const handleSignUpSubmit = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;

    const user = {
      phone: form.phone.value,
      password: form.password.value,
    };

    // Main api link at App.jsx
    fetch(`${MainApiLink}/api/v1/auth/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          toast.success("User login successful!");
          form.reset();
          navigate("/dashboard/user/profile");
          setRefresh(refresh + 1);
          setTokenToLocalStorage(data?.data?.token);
          console.log(data);
        } else {
          setError(data?.message);
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col min-w-[600px]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUpSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <h1 className="text-red-600">{error}</h1>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        {/* toggle to sign up page */}
        <div>
          <h1 className="text-[18px]">
            {`Don't have a account`} <Link className="text-[19px] font-semibold ml-2 hover:underline" to="/signup">Sign up</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
