import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Maintenance from "./components/Maintenance";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog",
    element: <Maintenance />,
  },
  {
    path: "/loja",
    element: <Maintenance />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
