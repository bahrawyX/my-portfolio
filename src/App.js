import "./App.css";
import About from "./Components/About/About";
import Allprojects from "./Components/AllProjects/Allprojcets";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOuts/MainLayOut";
import AboutAll from "./Components/aboutAll/AboutAll";
import AboutLayOut from "./LayOuts/AboutLayOut/AboutLayOut";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Particles from "react-tsparticles";
const particleOptions = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 5,
    },
    color: {
      value: "#ffffff",
    },
    opacity: {
      value: 0.7,
    },
    lineLinked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
  },
  {
    path: "/projects",
    element: <Allprojects />,
  },
  {
    path: "/about",
    element: <AboutLayOut />,
  },
]);
function App() {
  return (
    <div className="App">
      <div className="content">
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
