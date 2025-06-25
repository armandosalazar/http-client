import "@/index.css";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}