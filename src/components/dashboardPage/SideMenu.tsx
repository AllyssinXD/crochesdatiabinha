import { ReactElement } from "react";
import "./SideMenu.css";

// Formato para Props:
type SideMenuProps = {
  items: { imgUrl: string; label: string; onClick(): void }[];
};

function SideMenu(props: SideMenuProps) {
  const propsToMenuItem = Array<ReactElement>();

  //Converter props para um Elemento, Item do Menu
  props.items.forEach((v) => {
    propsToMenuItem.push(
      <div className="side-menu-item" onClick={v.onClick}>
        <img className="menu-item-icon" src={v.imgUrl} />
        <span className="menu-item-title">{v.label}</span>
      </div>
    );
  });

  //Retorna o Menu Vertical Junto com Seus Itens, Gerados Dinamicamente pelos props
  return (
    <div className="side-menu">
      {propsToMenuItem.map((item, i) => (
        <div id={i + ""}>{item}</div>
      ))}
    </div>
  );
}

export default SideMenu;
