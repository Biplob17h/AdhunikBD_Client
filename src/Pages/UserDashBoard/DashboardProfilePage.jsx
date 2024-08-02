import React, { useContext } from "react";
import { AuthContext } from "../../ContextApi/UserContext";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";

const DashboardProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.photo);

  const handleEditPhoto = () => {
    // Logic to update the user's photo can be added here
    alert("Edit photo feature coming soon!");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="relative">
          {user?.photo ? (
            <img
              src={user.photo}
              alt="User Avatar"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 shadow-sm"
            />
          ) : (
            <RxAvatar size={192} className="text-gray-500" />
          )}
          <button
            onClick={handleEditPhoto}
            className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
          >
            <AiOutlineEdit size={24} className="text-blue-500" />
          </button>
        </div>
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">NID:</span> {user?.nid}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Phone:</span> {user?.phone}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Date of Birth:</span> {user?.dateOfBirth}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Gender:</span> {user?.gender}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Address:</span>{" "}
            <span className="break-words">{user?.address}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfilePage;
