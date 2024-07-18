import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

// Main api link for the project
export const MainApiLink = `http://localhost:5000`;

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
