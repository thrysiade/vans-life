import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetails, { loader as vanDetailsLoader } from "./pages/VanDetails";

// import VanRootLayout from './pages/VanRoot';

import "./server";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VansHost, { loader as vanHostLoader } from "./pages/Host/VansHost";
import VanDetailsHost, {
  loader as vanDetailsHostLoader,
} from "./pages/Host/VanDetailsHost";
import VanDetailsHostInfo from "./pages/Host/VanDetailsHostInfo";
import VanDetailsHostPricing from "./pages/Host/VanDetailsHostPricing";
import VanDetailsHostPhoto from "./pages/Host/VanDetailsHostPhoto";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login from "./pages/Login";
import { requireAuth } from "./utils";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "login", element: <Login /> },
        {
          path: "vans",
          element: <Vans />,
          errorElement: <Error />,
          loader: vansLoader,
        },
        {
          path: "vans/:id",
          element: <VanDetails />,
          loader: vanDetailsLoader,
        },
        {
          path: "host",
          element: <HostLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
              loader: async () => await requireAuth()
            },
            {
              path: "income",
              element: <Income />,
              loader: async () => await requireAuth()
            },
            {
              path: "reviews",
              element: <Reviews />,
              loader: async () => await requireAuth()
            },
            {
              path: "vans",
              element: <VansHost />,
              loader: vanHostLoader,
            },
            {
              path: "vans/:id",
              id: "van-detail-host",
              element: <VanDetailsHost />,
              loader: vanDetailsHostLoader,
              children: [
                {
                  index: true,
                  element: <VanDetailsHostInfo />,
                  loader: async () => await requireAuth()
                },
                {
                  path: "pricing",
                  element: <VanDetailsHostPricing />,
                  loader: async () => await requireAuth()
                },
                {
                  path: "photos",
                  element: <VanDetailsHostPhoto />,
                  loader: async () => await requireAuth()
                },
              ],
            },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    // <BrowserRouter>
    //   <header>
    //     <Link className="site-logo" to="/">#VanLife</Link>
    //     <nav>
    //       <Link to="/about">About</Link>
    //       <Link to="/vans">Vans</Link>
    //     </nav>
    //   </header>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/vans" element={<Vans />} loader={vansLoader} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
