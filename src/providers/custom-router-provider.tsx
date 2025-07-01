import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/views/layout";
import HomeView from "@/views/home/home-view";

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