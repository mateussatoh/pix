import React from "react";
import {
  Container,
  FormWrap,
  LogoWrap,
  Logo,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

import logo from "../../images/logo.png";

const SigninComponent = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Form action="#">
            <LogoWrap to="/">
              <Logo src={logo}></Logo>
            </LogoWrap>

            <FormH1>Entre em sua conta Pix.</FormH1>
            <FormLabel htmlFor="for">E-mail / CPF</FormLabel>
            <FormInput type="email" required></FormInput>
            <FormLabel htmlFor="for">Senha</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Entrar</FormButton>
            <Text to="/signup">Já tenho uma conta Pix.</Text>
            <Text to="/forgot_password">Esqueci minha senha.</Text>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default SigninComponent;
