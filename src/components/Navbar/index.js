import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavRouter,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/logo.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const goHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={goHome}>
            <Logo src={logo}></Logo>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                Descubra
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="create"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                Como usar
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavRouter to="/signup">Criar chave</NavRouter>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Faça sua tranferência</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
