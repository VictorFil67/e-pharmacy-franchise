import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  max-width: 375px;
  padding: 25px 20px 0px 20px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 28px 32px 0px 32px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: ${(props) =>
      props.$path === "/register" || props.$path === "/login"
        ? "28px 100px 0px"
        : "28px 128px 0px"};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #59b17a;
`;

export const FooterContainer = styled.div`
  width: 100%;
  /* flex-grow: 1; */
  max-width: 375px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px;
    gap: 32px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 40px 128px;
    gap: 40px;
  }
`;
