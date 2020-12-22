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
} from "./SignupElements";

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

            <FormH1>Crie sua conta Pix.</FormH1>
            <FormLabel htmlFor="for">CPF</FormLabel>
            <FormInput type="email" required></FormInput>

            <FormLabel htmlFor="for">E-mail</FormLabel>
            <FormInput type="email" required></FormInput>

            <FormLabel htmlFor="for">Senha</FormLabel>
            <FormInput type="password" required></FormInput>

            <FormLabel htmlFor="for">Confirme sua senha</FormLabel>
            <FormInput type="password" required></FormInput>

            <FormButton type="submit">Criar conta</FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default SigninComponent;
