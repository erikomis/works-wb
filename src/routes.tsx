import { createBrowserRouter } from "react-router-dom";
import { CreateProduct } from "./pages/createProduct/CreateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "create-product",
    element: <CreateProduct />,
  },
]);
