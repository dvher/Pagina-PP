import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Home from "./routes/inicio";
import Contact from "./routes/contacto";
import Blog from "./routes/blog";
import Adoptions from "./routes/adopciones";
import Donations from "./routes/donaciones";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/GlobalStyle";
import Theme from "./theme";

const HeaderLayout = () => (
  <>
    <header>
      <GlobalStyle></GlobalStyle>
      <Navbar />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/inicio",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/donaciones",
        element: <Donations />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/adopciones",
        element: <Adoptions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Theme>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Theme>
);
