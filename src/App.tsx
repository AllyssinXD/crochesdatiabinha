import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage/components/LandingPage";
import Maintenance from "./pages/maintenancePage/components/Maintenance";
import Login from "./pages/signPages/pages/Login";
import Signup from "./pages/signPages/pages/Signup";
import CreateUser from "./pages/signPages/processes/CreateUser";
import Dashboard from "./pages/dashboardPage/components/DashboardPage";

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
