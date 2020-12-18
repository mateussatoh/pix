import styled from "styled-components";

export const FooterContainer = styled.div``;

export const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: 0.3fr repeat(4, 1fr);
  height: 70vh;
  background: black;
  color: white;
  font-weight: 400;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-top: 60px;
  color: #919496;
`;
export const FooterLink = styled.li`
  list-style: none;
  padding-top: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #eee;
  :hover {
    color: #37b4aa;
  }
`;
export const Image = styled.img`
  height: 60px;
  padding: 0 30px;
  margin-top: 40px;
`;

export const FooterLinkImage = styled.div`
  height: 100px;
  color: #eee;
`;
