import {useState, useEffect} from "react";
import reactLogo from "../public/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import MainPage from "./pages/MainPage";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import ProjectPage from "./pages/ProjectPage";
import PortfolioPage from "./pages/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Router,
  useNavigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "project/:name",
    element: <ProjectPage />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);
  return (
    <>
      <NavComponent />
      <RouterProvider router={router} />
      <FooterComponent />
    </>
  );
}

export default App;
