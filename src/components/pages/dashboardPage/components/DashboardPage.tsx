import { useState } from "react";
import "../styles/Dashboard.css";
import SideMenu from "./SideMenu";
import Home from "./painels/HomePainel";
import Contacts from "./painels/ContactsPainel";
import SearchBar from "./SearchBar";

function Dashboard() {
  const [currentPainel, setCurrentPainel] = useState("home");

  const renderPainel = () => {
    if (currentPainel == "home") return <Home />;
    if (currentPainel == "contacts") return <Contacts />;
  };

  return (
    <div className="dashboard">
      <SideMenu
        menuOptions={[
          {
            iconUrl: "./",
            name: "Inicio",
            onClick: () => {
              setCurrentPainel("home");
            },
          },
          { iconUrl: "./", name: "Usuários", onClick: () => {} },
          { iconUrl: "./", name: "Blog", onClick: () => {} },
          {
            iconUrl: "./",
            name: "Contatos",
            onClick: () => {
              setCurrentPainel("contacts");
            },
          },
          { iconUrl: "./", name: "Admins", onClick: () => {} },
        ]}
      />

      <main className="painel-container">
        <SearchBar />
        {renderPainel()}
      </main>
    </div>
  );
}

export default Dashboard;
