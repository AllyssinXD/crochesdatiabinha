import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
