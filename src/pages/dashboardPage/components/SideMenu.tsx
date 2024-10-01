import SideMenuProps from "../../../interfaces/SideMenuInterface";

import "../styles/SideMenu.css";

function SideMenu({ menuOptions }: SideMenuProps) {
  //Retorna o Menu Vertical Junto com Seus Itens, Gerados Dinamicamente pelos props
  return (
    <div className="side-menu">
      {menuOptions.map((option, i) => {
        //Renderiza um Elemento pra cada item
        const line = i == 5 ? <hr className="separator" /> : null;
        const img = option.iconUrl ? (
          <img className="menu-item-icon" src={option.iconUrl} />
        ) : null;
        return (
          <>
            {line}
            <div key={i} className="side-menu-item" onClick={option.onClick}>
              {img}
              <span className="menu-item-title">{option.name}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SideMenu;
