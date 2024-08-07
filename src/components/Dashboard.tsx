import "./Dashboard.css";
import SideMenu from "./SideMenu";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideMenu
        items={[
          { imgUrl: "./", label: "Mercado", link: "Mercado" },
          { imgUrl: "./", label: "Usuários", link: "Usuários" },
          { imgUrl: "./", label: "Blog", link: "Blog" },
          { imgUrl: "./", label: "Contatos", link: "" },
        ]}
      ></SideMenu>
      <div className="main"></div>
    </div>
  );
}

export default Dashboard;
