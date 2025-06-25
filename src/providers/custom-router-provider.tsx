import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/views/layout";
import Home from "@/views/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> }
    ]
  }
]);

export default function CustomRouterProvider() {
  return <RouterProvider router={router} />
}