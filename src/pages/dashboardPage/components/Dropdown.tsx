import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dropdown(props: { pfpUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownMenu = isOpen ? (
    <div className="profile-dropdown">
      <ul>
        <li>Minha Conta</li>
        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li>Configurações</li>
        <li>Logout</li>
      </ul>
    </div>
  ) : null;

  return (
    <div className="profile-wrapper" onClick={() => setIsOpen(!isOpen)}>
      <div className="profile">
        <img className="profile-picture" src={props.pfpUrl} />
      </div>
      {dropdownMenu}
    </div>
  );
}
