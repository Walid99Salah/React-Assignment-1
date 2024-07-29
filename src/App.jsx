import { useState } from "react";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Components/Layout/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import Notfound from "./Components/Notfound/Notfound.jsx";

let routers = createBrowserRouter([
  { path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
