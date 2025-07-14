import AppEffects from "./script/AppEffects";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Faqs from "./pages/faqs";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/solutions",
      element: <Solutions />,
    },

    {
      path: "/partners",
      element: <Partners />,
    },

    {
      path: "/news",
      element: <News />,
    },

    {
      path: "/faq",
      element: <Faqs />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <>
      <AppEffects />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
