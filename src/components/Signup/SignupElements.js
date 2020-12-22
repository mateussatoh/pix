import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(150deg, rgb(55, 180, 170) 0%, rgb(5, 30, 20));
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const LogoWrap = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  padding: 40px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 60%;
  height: auto;
`;

export const Form = styled.form`
  background: #0f0f0f;
  max-width: 50vw;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`;

export const FormH1 = styled.h1`
  margin: 15px 0;
  color: white;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`;

export const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: rgb(55, 180, 170);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #010606;
  }
`;

export const Text = styled(LinkRouter)`
  cursor: pointer;
  text-align: center;
  margin-top: 40px;
  color: white;
  font-size: 14px;
`;
