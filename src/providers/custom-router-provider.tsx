import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../view/layout";
import HomeView from "../view/home/home-view";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: () => <HomeView />
      }
    ]
  }
])


export default function CustomRouterProvider() {
  return <RouterProvider router={router} />
}