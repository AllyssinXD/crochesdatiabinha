import { useState } from "react";
import "../styles/Dashboard.css";
import SideMenu from "./SideMenu";
import Home from "./painels/HomePainel";
import Contacts from "./painels/ContactsPainel";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import useVerifyPemissions from "../../../hooks/useVerifyPermissions";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const notAllowed = () => {
    navigate("/login");
  };

  const { isFetching } = useVerifyPemissions(
    token,
    "acess-dashboard",
    notAllowed
  );

  const [currentPainel, setCurrentPainel] = useState("home");

  const renderPainel = () => {
    if (currentPainel == "home") return <Home />;
    if (currentPainel == "contacts") return <Contacts />;
  };

  const renderDashboard = () => {
    return (
      <div className="dashboard">
        <SideMenu
          menuOptions={[
            {
              iconUrl: "/images/home-icon.png",
              name: "Inicio",
              onClick: () => {
                setCurrentPainel("home");
              },
            },
            {
              iconUrl: "/images/users-icon.png",
              name: "Usuários",
              onClick: () => {},
            },
            {
              iconUrl: "/images/blog-icon.png",
              name: "Blog",
              onClick: () => {},
            },
            {
              iconUrl: "/images/messages-icon.png",
              name: "Contatos",
              onClick: () => {
                setCurrentPainel("contacts");
              },
            },
            {
              iconUrl: "/images/admins-icon.png",
              name: "Admins",
              onClick: () => {},
            },
          ]}
        />

        <main className="painel-container">
          <SearchBar />
          {renderPainel()}
        </main>
      </div>
    );
  };

  return isFetching ? <></> : renderDashboard();
}

export default Dashboard;
