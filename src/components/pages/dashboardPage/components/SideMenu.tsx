import SideMenuProps from "../../../interfaces/SideMenuInterface";

import "./SideMenu.css";

function SideMenu({ menuOptions }: SideMenuProps) {
  //Retorna o Menu Vertical Junto com Seus Itens, Gerados Dinamicamente pelos props
  return (
    <div className="side-menu">
      {menuOptions.map((option, i) => (
        //Renderiza um Elemento pra cada item
        <div id={i.toString()}>
          <div className="side-menu-item" onClick={option.onClick}>
            <img className="menu-item-icon" src={option.iconUrl} />
            <span className="menu-item-title">{option.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideMenu;
