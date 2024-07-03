import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuIconRef = useRef<HTMLUListElement>(null);

  const updateMobile = () => {
    window.innerWidth > 1024 ? setIsMobile(false) : setIsMobile(true);
  };

  const animateMenuToggle = () => {
    if (mobileMenu) {
      if (menuRef.current != null) {
        menuRef.current.style.display = "flex";
        setTimeout(() => {
          if (menuRef.current != null)
            menuRef.current.className = "menu-mobile active";
        }, 1);
      }
    } else {
      if (menuRef.current != null) {
        menuRef.current.className = "menu-mobile closed";
        setTimeout(() => {
          if (menuRef.current != null) menuRef.current.style.display = "none";
        }, 500);
      }
    }
  };

  const handleMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const updateMobileMenu = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      event.target != menuIconRef.current &&
      (event.target as Node).parentElement != menuIconRef.current
    ) {
      setMobileMenu(false);
      console.log("Registrou Click Para Fechar");
    }
  };

  useEffect(() => {
    updateMobile();
    window.addEventListener("resize", updateMobile);
    document.addEventListener("mousedown", updateMobileMenu);
    return () => {
      window.removeEventListener("resize", updateMobile);
      document.removeEventListener("mousedown", updateMobileMenu);
    };
  }, []);

  useEffect(() => {
    animateMenuToggle();
  }, [mobileMenu]);

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
            className="menu-mobile closed"
            ref={menuRef}
            style={{ display: "none" }}
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
        ref={menuIconRef}
      >
        <li className="menu-icon-line"></li>
        <li className="menu-icon-line"></li>
        <li className="menu-icon-line"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
