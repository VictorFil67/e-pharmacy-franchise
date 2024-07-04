import styled from "styled-components";
import { HeaderLogoText } from "../Header/Header.Styled";
import { NavLink } from "react-router-dom";

export const FooterLogoText = styled(HeaderLogoText)`
  color: #fff;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 80px;
  border-bottom: 1px solid rgba(247, 248, 250, 0.3);
`;
export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterTopText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #f7f8fa;
  max-width: 261px;
`;

export const LinksBlock = styled.div`
  display: flex;
  gap: 32px;
`;

export const FooterLink = styled(NavLink)`
  background: transparent;
  /* border-radius: 24px; */
  /* padding: 8px 20px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #f7f8fa;
  /* &.active {
    color: #fff;
    background-color: #59b17a;
  } */
`;
