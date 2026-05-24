import { createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import StaticForm from "./pages/StaticForm"
import Product from "./pages/Product"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "static-form",
        element: <StaticForm />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ]
  }
])