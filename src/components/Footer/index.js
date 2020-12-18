import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLink,
  FooterLinkImage,
  Image,
} from "./FooterElements";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Image src={logo} />
        <FooterLinksContainer>
          <h4>BANCO CENTRAL</h4>
          <FooterLink to="/signin">Sobre nós</FooterLink>
          <FooterLink to="/signin">Saiba mais</FooterLink>
          <FooterLink to="/signin">Trabalhe conosco</FooterLink>
          <FooterLink to="/signin">Página oficial</FooterLink>
        </FooterLinksContainer>
        <FooterLinksContainer>
          <h4>PIX</h4>
          <FooterLink to="/signin">Crie sua chave</FooterLink>
          <FooterLink to="/signin">Faça sua tranferência</FooterLink>
          <FooterLink to="/signin">Pix para empresas</FooterLink>
          <FooterLink to="/signin">Reportar erro</FooterLink>
          <FooterLink to="/signin">Termos de uso</FooterLink>
        </FooterLinksContainer>
        <FooterLinksContainer>
          <h4>PERGUNTAS FREQUENTES</h4>
          <FooterLink to="/signin">Segurança</FooterLink>
          <FooterLink to="/signin">Tranferências</FooterLink>
          <FooterLink to="/signin">Conta</FooterLink>
          <FooterLink to="/signin">Dados</FooterLink>
        </FooterLinksContainer>

        <FooterLinksContainer>
          <FooterLinkImage>
            <i class="fab fa-facebook-f" id="social"></i>
          </FooterLinkImage>
          <FooterLinkImage>
            <i class="fab fa-instagram" id="social"></i>
          </FooterLinkImage>
          <FooterLinkImage>
            <i class="fab fa-twitter" id="social"></i>
          </FooterLinkImage>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
