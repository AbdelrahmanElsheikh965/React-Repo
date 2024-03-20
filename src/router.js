import { Outlet, createBrowserRouter } from "react-router-dom";
import Product from "./components/oneproduct";
import Products from "./components/Products";
import NavBar from "./components/nav";
import Register from "./components/Register";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

function WithoutLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Product />,
        path: "/product"
      },
      {
        element: <Products />,
        path: "/"
      }
    ]
  },
  {
    element: <WithoutLayout />,
    children: [
      {
        element: <Register />,
        path: "/register"
      },
    ]
  }
])

export default router;