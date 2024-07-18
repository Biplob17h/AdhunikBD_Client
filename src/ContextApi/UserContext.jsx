/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useEffect, useState } from "react";
import { MainApiLink } from "../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(1);

  if (!user) {
    useEffect(() => {
      setLoading(true);
      const token = localStorage.getItem("AdhunikToken");

      fetch(`${MainApiLink}/api/v1/auth/user/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setUser(data?.userData);
            setLoading(false);
          }
        });
    }, [refresh]);
  }

  const value = { user, loading, setLoading, setRefresh, refresh };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
