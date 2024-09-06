import { useState } from "react";
import "./Dashboard.css";
import SideMenu from "./SideMenu";
import Home from "./painels/Home";
import Contacts from "./painels/Contacts";

function Dashboard() {
  const [currentPainel, setCurrentPainel] = useState("home");

  const renderPainel = () => {
    if (currentPainel == "home") return <Home />;
    if (currentPainel == "contacts") return <Contacts />;
  };

  return (
    <div className="dashboard">
      <SideMenu
        items={[
          {
            imgUrl: "./",
            label: "Inicio",
            onClick: () => {
              setCurrentPainel("home");
            },
          },
          { imgUrl: "./", label: "Usuários", onClick: () => {} },
          { imgUrl: "./", label: "Blog", onClick: () => {} },
          {
            imgUrl: "./",
            label: "Contatos",
            onClick: () => {
              setCurrentPainel("contacts");
            },
          },
          { imgUrl: "./", label: "Admins", onClick: () => {} },
        ]}
      ></SideMenu>
      <main className="main">
        <div className="fixed-dashboard-header space-between">
          <div className="search-bar-wrapper">
            <img src="" className="search-icon" />
            <input
              className="search-text-input"
              type="text"
              name="pesquisar"
              placeholder="Procurar"
            />
          </div>
          <div className="profile-dropdown"></div>
        </div>
        {renderPainel()}
      </main>
    </div>
  );
}

export default Dashboard;
