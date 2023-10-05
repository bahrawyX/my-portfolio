import './App.css';
import About from './Components/About/About';
import Allprojects from './Components/AllProjects/Allprojcets';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import MainLayOut from './LayOuts/MainLayOut';
import AboutAll from './Components/aboutAll/AboutAll';
import AboutLayOut from './LayOuts/AboutLayOut/AboutLayOut';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';

const  routes = createBrowserRouter([

  {
    path:"/",
    element: <MainLayOut />,

  },
  {
    path:"/projects",
    element: <Allprojects />,
  }
  ,
  {
    path:"/about",
    element: <AboutLayOut />,
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}  />
      
    </div>
  );
}

export default App;
