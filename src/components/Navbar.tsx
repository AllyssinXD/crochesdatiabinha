import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const updateMobile = () => {
    console.log(window.innerWidth);
    window.innerWidth > 1200 ? setIsMobile(false) : setIsMobile(true);
  };

  const handleMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const updateMobileMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    updateMobile();
    window.addEventListener("resize", updateMobile);
    document.addEventListener("mousedown", updateMobileMenu);
    return () => {
      window.removeEventListener("resize", updateMobile);
      document.removeEventListener("mousedown", updateMobile);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container flex-row space-between">
        <div className="logo-box">
          <img src="/images/logo-small-nav.png" className="logo-small" />
          <h1 className="logo-title">CROCHÊS DA TIA BINHA</h1>
        </div>
        <ul
          className="menu"
          style={isMobile ? { display: "none" } : { display: "flex" }}
        >
          <li className="menu-item">Ínicio</li>
          <li className="menu-item">Trabalhos</li>
          <li className="menu-item">Contato</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">Loja</li>
        </ul>
        <div style={!isMobile ? { display: "none" } : { display: "flex" }}>
          <ul
            className="menu-mobile"
            ref={menuRef}
            style={mobileMenu ? { display: "flex" } : { display: "none" }}
          >
            <li className="menu-item">Ínicio</li>
            <li className="menu-item">Trabalhos</li>
            <li className="menu-item">Contato</li>
            <li className="menu-item">Blog</li>
            <li className="menu-item">Loja</li>
          </ul>
        </div>
      </div>
      <ul
        className="menu-icon"
        style={!isMobile ? { display: "none" } : { display: "flex" }}
        onClick={handleMenuToggle}
      >
        <li className="menu-icon-line"></li>
        <li className="menu-icon-line"></li>
        <li className="menu-icon-line"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
