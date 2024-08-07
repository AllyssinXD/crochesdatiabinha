import { ReactElement } from "react";
import "./SideMenu.css";
import { NavigateFunction, useNavigate } from "react-router-dom";

type SideMenuProps = {
  items: { imgUrl: string; label: string; link: string }[];
};

function SideMenu(props: SideMenuProps) {
  const navigate = useNavigate();
  const SideMenuItems = Array<ReactElement>();

  const generateFunction = (link: string, navigator: NavigateFunction) => {
    return function () {
      navigator(link);
    };
  };
  props.items.forEach((v) => {
    SideMenuItems.push(
      <div
        className="side-menu-item"
        onClick={generateFunction(v.link, navigate)}
      >
        <img className="menu-item-icon" src={v.imgUrl} />
        <span className="menu-item-title">{v.label}</span>
      </div>
    );
  });

  return (
    <div className="side-menu">
      {SideMenuItems.map((item, i) => (
        <div id={i + ""}>{item}</div>
      ))}
    </div>
  );
}

export default SideMenu;
