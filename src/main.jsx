import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import AddCoffee from "./componentes/AddCoffee";
import UpdateCoffee from "./componentes/UpdateCoffee";
import Home from "./componentes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
