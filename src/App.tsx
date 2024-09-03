import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Maintenance from "./components/Maintenance";
import Login from "./components/SignPages/Login";
import Authenticate from "./components/SignPages/Authenticate";
import Signup from "./components/SignPages/Signup";
import CreateUser from "./components/SignPages/CreateUser";
import Dashboard from "./components/Dashboard/Dashboard";

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
    path: "/authenticate",
    element: <Authenticate />,
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
