import "./App.css";
import Allprojects from "./Components/AllProjects/Allprojcets";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOuts/MainLayOut";
import AboutAll from "./Components/aboutAll/AboutAll";
import {AnimatePresence } from "framer-motion";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "about",
        element: <AboutAll />,
      },
      {
        path: "projects",
        element: <Allprojects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App({ Component, pageProps, router }) {
  return (
    <div className="App">
    
      <AnimatePresence>
        <RouterProvider router={routes} />

      </AnimatePresence>
    </div>
  );
}

export default App;
