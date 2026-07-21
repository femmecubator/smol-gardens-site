import { createBrowserRouter, Outlet } from "react-router";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Seedscore from "./pages/Seedscore";
import Placeholder from "./pages/Placeholder";

function Root() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: () => <Placeholder title="About" /> },
      { path: "seedscore", Component: Seedscore },
      { path: "topics", Component: () => <Placeholder title="Topics" /> },
    ],
  },
]);
