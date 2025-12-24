import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import 'remixicon/fonts/remixicon.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Country from "./pages/Country.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Error from "./pages/Error.jsx";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}  errorElement={<Error/>} >
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Country" element={<Country />} />
        <Route path="Contact" element={<Contact />} />
        
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
{/* //i will do it more optimised way using outlet and rootlayout
//also use outlet for more nested root */}