import styled from "styled-components";
import { HeaderLogo, HeaderLogoText } from "../Header/Header.Styled";
import { Link } from "react-router-dom";

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
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 139px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterLogoWrap = styled(HeaderLogo)`
  max-width: 171px;
`;

export const FooterTopText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--pale-grey);
  max-width: 261px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const FooterTopTextDesk = styled.p`
  display: none;
  @media only screen and (min-width: 1440px) {
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: var(--pale-grey);
    max-width: 311px;
  }
`;

export const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media only screen and (min-width: 768px) {
    margin-top: 9px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    /* padding-right: 139px; */
    flex-grow: 1;
  }
`;

export const PagesLinks = styled.div`
  display: flex;
  gap: 32px;
  @media only screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const FooterLink = styled(Link)`
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #f7f8fa;
  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
  }
  @media only screen and (min-width: 1440px) {
    /* flex-direction: row;
    justify-content: space-between;
    margin-top: 0; */
    /* padding-right: 139px; */
    /* flex-grow: 1; */
  }
`;

export const MediaLinks = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 12px;
    align-self: flex-end;
  }
  @media only screen and (min-width: 1440px) {
    align-self: flex-start;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  row-gap: 10px;
  font-weight: 400;
  font-size: 10px;
  color: var(--pale-grey);
  & > :first-child::after,
  :nth-child(2)::after {
    content: "";
    width: 1px;
    height: 10px;
    background: #f7f8fa;
    opacity: 0.2;
    position: absolute;
    top: 0;
    right: -10px;
  }
  @media only screen and (min-width: 768px) {
    align-self: center;
    font-size: 14px;
    line-height: 1.28571;
    gap: 49px;
    & > :first-child::after,
    :nth-child(2)::after {
      /* content: "";
      width: 1px; */
      /* height: 20px;
      background: #f7f8fa;
      opacity: 0.2;
      position: absolute;
      top: 0; */
      right: -24px;
    }
  }
`;
export const Copyright = styled.p`
  position: relative;
`;

export const ClarificationLink = styled(Link)`
  position: relative;
`;
