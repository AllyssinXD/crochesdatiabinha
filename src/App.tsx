import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Maintenance from "./components/Maintenance";
import Login from "./components/signPages/Login";
import Signup from "./components/signPages/Signup";
import CreateUser from "./components/signPages/CreateUser";
import Dashboard from "./components/dashboard/Dashboard";

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
  {
    path: "/create-user",
    element: <CreateUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
