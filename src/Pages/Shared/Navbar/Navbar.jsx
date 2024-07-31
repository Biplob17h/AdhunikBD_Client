/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../../ContextApi/UserContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user?.phone);
  return (
    <div className="w-full h-24 flex items-center justify-between gap-x-3 border-b border-white p-2">
      <div className="w-full flex items-center border border-white bg-[#E7E7E7] rounded-full h-full p-1">
        <Link to={"/"} className="px-5 border-2 border-red-600 cursor-pointer">
          <h1>Adunik BD</h1>
        </Link>
        <input
          type="text"
          name=""
          id=""
          className="bg-[#E7E7E7] outline-none pl-5 w-full border-2"
        />
        <button className="bg-black text-white h-full px-12 rounded-full flex items-center gap-x-3">
          Search <RiSearchLine size={24} />
        </button>
      </div>
      <div className="h-full flex items-center gap-x-3">
        <div className="h-full flex gap-3">
          <button className="bg-white rounded-full w-28 h-full">Sell</button>
          <button className="bg-white rounded-full w-28 h-full">App</button>
        </div>
        <button className="h-full w-20 rounded-full bg-white flex items-center justify-center">
          <FaHeart size={24} color="red" />
        </button>
        <button className="h-full w-20 rounded-full bg-slate-500 flex items-center justify-center">
          <CiShoppingCart size={24} color="" />
        </button>
        {/* toggle user and login */}
        <div>
          {user?.phone ? (
            <Link
              to={`/dashboard/user/profile`}
              className="h-full w-20 rounded-full bg-white flex items-center justify-center"
            >
              <RxAvatar size={24} color="" />
            </Link>
          ) : (
            <Link
              to={`/login`}
              className="btn btn-primary"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
