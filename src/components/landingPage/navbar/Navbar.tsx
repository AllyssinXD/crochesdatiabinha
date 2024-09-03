import React, { RefObject, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  sections: {
    heroSectionRef: RefObject<HTMLElement>;
    contactSectionRef: RefObject<HTMLElement>;
    jobsSectionRef: RefObject<HTMLElement>;
    blogSectionRef: RefObject<HTMLElement>;
  };
}

const NavBar: React.FC<NavbarProps> = ({ sections }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuIconRef = useRef<HTMLUListElement>(null);

  // Atualiza o estado de acordo com o tamanho da janela para determinar se é mobile
  const updateMobile = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  // Anima a abertura/fechamento do menu mobile
  const animateMenuToggle = () => {
    if (menuRef.current) {
      if (mobileMenu) {
        menuRef.current.style.display = "flex";
        setTimeout(() => {
          menuRef.current?.classList.add("active");
        }, 1);
      } else {
        menuRef.current.classList.add("closed");
        setTimeout(() => {
          menuRef.current?.classList.remove("active");
          if (menuRef.current) menuRef.current.style.display = "none";
        }, 500);
      }
    }
  };

  // Manipula o clique no ícone de menu mobile
  const handleMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  // Fecha o menu mobile se o clique for fora dele
  const updateMobileMenu = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      event.target !== menuIconRef.current &&
      (event.target as Node).parentElement !== menuIconRef.current
    ) {
      setMobileMenu(false);
      console.log("Clique fora do menu mobile - fechando");
    }
  };

  // Efeitos de inicialização e limpeza para eventos de redimensionamento e clique fora do menu
  useEffect(() => {
    updateMobile();
    window.addEventListener("resize", updateMobile);
    document.addEventListener("mousedown", updateMobileMenu);
    return () => {
      window.removeEventListener("resize", updateMobile);
      document.removeEventListener("mousedown", updateMobileMenu);
    };
  }, []);

  // Efeito para animar o toggle do menu mobile
  useEffect(() => {
    animateMenuToggle();
  }, [mobileMenu]);

  // Função para rolar para uma seção específica
  const handleScroll = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Função para redirecionar para uma página
  const navigate = useNavigate();
  const handleRedirect = (url: string) => {
    navigate(url);
  };

  return (
    <nav className="navbar">
      <div className="container flex-row space-between">
        <div className="logo-box">
          <img
            src="/images/logo-small-nav.png"
            className="logo-small"
            alt="Logo"
          />
          <h1 className="logo-title">CROCHÊS DA TIA BINHA</h1>
        </div>
        {/* Menu desktop */}
        <ul className="menu" style={{ display: isMobile ? "none" : "flex" }}>
          <li
            onClick={() => handleScroll(sections.heroSectionRef)}
            className="menu-item"
          >
            Ínicio
          </li>
          <li
            onClick={() => handleScroll(sections.jobsSectionRef)}
            className="menu-item"
          >
            Trabalhos
          </li>
          <li
            onClick={() => handleScroll(sections.contactSectionRef)}
            className="menu-item"
          >
            Contato
          </li>
          <li
            onClick={() => handleScroll(sections.blogSectionRef)}
            className="menu-item"
          >
            Blog
          </li>
          <li onClick={() => handleRedirect("/loja")} className="menu-item">
            Loja
          </li>
        </ul>

        {/* Menu mobile */}
        <div style={{ display: isMobile ? "flex" : "none" }}>
          <ul
            className={`menu-mobile ${mobileMenu ? "active" : "closed"}`}
            ref={menuRef}
          >
            <li
              onClick={() => handleScroll(sections.heroSectionRef)}
              className="menu-item"
            >
              Ínicio
            </li>
            <li
              onClick={() => handleScroll(sections.jobsSectionRef)}
              className="menu-item"
            >
              Trabalhos
            </li>
            <li
              onClick={() => handleScroll(sections.contactSectionRef)}
              className="menu-item"
            >
              Contato
            </li>
            <li
              onClick={() => handleScroll(sections.blogSectionRef)}
              className="menu-item"
            >
              Blog
            </li>
            <li onClick={() => handleRedirect("/loja")} className="menu-item">
              Loja
            </li>
          </ul>
        </div>
      </div>
      {/* Ícone do menu mobile */}
      <ul
        className="menu-icon"
        style={{ display: isMobile ? "flex" : "none" }}
        onClick={handleMenuToggle}
        ref={menuIconRef}
      >
        <li className="menu-icon-line"></li>
        <li className="menu-icon-line"></li>
        <li className="menu-icon-line"></li>
      </ul>
    </nav>
  );
};

export default NavBar;
