interface SideMenuProps {
  menuOptions: {
    iconUrl?: string;
    name: string;
    onClick(): void;
  }[];
}

export default SideMenuProps