import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Wrapper isScrolled={isScrolled}>
        <Logo href="#home">
          <img src={logo} alt="Logo" />
        </Logo>

        <Hamburger onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Nav menuOpen={menuOpen}>
          {["Home", "About", "Tech Stack", "Projects", "Contact"].map(
            (item, idx) => (
              <NavLink
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <Underline />
              </NavLink>
            )
          )}
        </Nav>
      </Wrapper>

      <Overlay menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1002;
  width: 95%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: ${({ isScrolled }) =>
    isScrolled ? "rgba(41, 47, 54, 0.8)" : "rgba(41, 47, 54, 0.6)"};
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
`;

const Logo = styled.a`
  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%; /* updated to full width */
    background: rgba(41, 47, 54, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transform: ${({ menuOpen }) =>
      menuOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 1003;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: white;
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #12f7d6;
  }

  &:hover span {
    width: 100%;
  }
`;

const Underline = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #12f7d6;
  transition: width 0.3s ease;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1004;

  span {
    display: block;
    width: 26px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  ${({ menuOpen }) =>
    menuOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translateY(8px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-8px);
    }
  `}

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Overlay = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1001;
`;

export default Header;
