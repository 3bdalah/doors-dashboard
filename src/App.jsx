import "./App.css";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ListProducts } from "./components/ListProducts/ListProducts";
import Home from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Layout } from "./components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add-product", element: <AddProduct /> },
        { path: "/products", element: <ListProducts /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
