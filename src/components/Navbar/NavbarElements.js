import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: rgba(20, 20, 20, 0.8);
  height: 80px;
  margin-top: -125px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 70px;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  max-width: 200px;
  @media screen and (max-width: 1200px) {
    justify-self: center;
  }
`;

export const Logo = styled.img`
  height: 80%;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  width: 90px;
  margin-left: 20px;
`;

export const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #37b4aa;
  }
`;

export const NavRouter = styled(LinkRouter)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #37b4aa;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  margin-left: 50px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #37b4aa;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`;
