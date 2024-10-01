import { useState } from "react";
import useGetWithToken from "../../../../hooks/useWithTokenReq";
import UserInterface from "../../../../interfaces/UserInterface";
import SideMenu from "../SideMenu";
import { PessoalInfoPainel } from "./myAccountPainels/PessoalInfoPainel";
import { SecurityInfoPainel } from "./myAccountPainels/SecurityInfoPainel";

export default function MyAccountPainel() {
  const { data, isFetching } = useGetWithToken<UserInterface>("/api/auth/");

  const [selectedPanel, setSelectedPanel] = useState<
    "PessoalInfo" | "Seguranca"
  >("PessoalInfo");

  // Função que decide qual painel renderizar
  const renderPainel = () => {
    switch (selectedPanel) {
      case "PessoalInfo":
        return <PessoalInfoPainel data={data} isFetching={isFetching} />;
      case "Seguranca":
        return <SecurityInfoPainel data={data} isFetching={isFetching} />; // Placeholder
      default:
        return null;
    }
  };

  return (
    <>
      <div className="my-account-painel max-sized-painel">
        <div className="sidemenu-wrapper">
          <img className="profile-picture" src="/images/admins-icon.png" />
          <SideMenu
            menuOptions={[
              {
                name: "Informações pessoais",
                onClick: () => setSelectedPanel("PessoalInfo"),
              },
              {
                name: "Segurança",
                onClick: () => setSelectedPanel("Seguranca"),
              },
            ]}
          />
        </div>
        {/* Renderiza o painel atual */}
        {renderPainel()}
      </div>
    </>
  );
}
