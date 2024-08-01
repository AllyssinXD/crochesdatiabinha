import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Maintenance from "./components/Maintenance";
import Login from "./components/Login";
import Authenticate from "./components/Authenticate";
import Signup from "./components/Signup";
import CreateUser from "./components/CreateUser";

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
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
