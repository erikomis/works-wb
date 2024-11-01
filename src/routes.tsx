import { createBrowserRouter } from "react-router-dom";
import { CreateProduct } from "./pages/createProduct/CreateProduct";
import { Home } from "./pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "create-product",
    element: <CreateProduct />,
  },
]);
