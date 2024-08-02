/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../ContextApi/UserContext";
import { MainApiLink } from "../../App";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUserProfile = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const updateUserProfile = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const nid = form.nid.value;
    const DD = parseInt(form.DD.value, 10);
    const MM = parseInt(form.MM.value, 10);
    const YYYY = parseInt(form.YYYY.value, 10);
    const gender = form.gender.value;
    const address = form.address.value;

    // Validate the date of birth
    if (MM < 1 || MM > 12) {
      setError("Month must be between 1 and 12.");
      return;
    }

    if (DD < 1 || DD > 31) {
      setError("Day must be between 1 and 31.");
      return;
    }

    if (YYYY < 1900 || YYYY > new Date().getFullYear()) {
      setError("Year must be between 1900 and the current year.");
      return;
    }

    // Check for valid days in each month
    const daysInMonth = new Date(YYYY, MM, 0).getDate(); // Get the number of days in the month
    if (DD > daysInMonth) {
      setError(
        `Invalid day for the month selected. The month ${MM} only has ${daysInMonth} days.`
      );
      return;
    }

    const updatedUser = {
      name,
      email,
      phone: user?.phone,
      nid,
      dateOfBirth: `${YYYY}-${MM.toString().padStart(
        2,
        "0"
      )}-${DD.toString().padStart(2, "0")}`,
      gender,
      address,
    };

    fetch(`${MainApiLink}/api/v1/auth/user/updateUser`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          toast.success("Updated user successfully");
          navigate("/dashboard/user/profile");
        }
      });
  };

  return (
    <div>
      {!user ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form
            onSubmit={updateUserProfile}
            className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
          >
            <h1 className="text-2xl font-bold mb-6 text-center">
              Update User Profile
            </h1>
            {/* user name */}
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  defaultValue={user?.name}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            {/* user email */}
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            {/* user NID */}
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your NID</span>
                </label>
                <input
                  type="number"
                  placeholder="Your NID"
                  name="nid"
                  defaultValue={user?.nid}
                  className="input input-bordered w-full hide-arrows"
                  required
                />
              </div>
            </div>
            {/* user date of birth */}
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Date of Birth</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="DD"
                    defaultValue={user?.dateOfBirth?.split("-")[2]}
                    name="DD"
                    className="input input-bordered w-1/3 hide-arrows"
                    required
                  />
                  <input
                    type="number"
                    placeholder="MM"
                    name="MM"
                    defaultValue={user?.dateOfBirth?.split("-")[1]}
                    className="input input-bordered w-1/3 hide-arrows"
                    required
                  />
                  <input
                    type="number"
                    placeholder="YYYY"
                    name="YYYY"
                    defaultValue={user?.dateOfBirth?.split("-")[0]}
                    className="input input-bordered w-1/3 hide-arrows"
                    required
                  />
                </div>
              </div>
            </div>
            {/* user Gender */}
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Gender</span>
                </label>
                <select
                  name="gender"
                  className="select select-bordered w-full"
                  defaultValue={user?.gender}
                >
                  <option disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            {/* user Address */}
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <textarea
                  placeholder="Your Address"
                  name="address"
                  defaultValue={user?.address}
                  className="input input-bordered w-full"
                  rows={3}
                  required
                />
              </div>
            </div>
            <p className="text-red-600 text-center mt-2">{error}</p>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 max-w-xs mt-3"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUserProfile;
