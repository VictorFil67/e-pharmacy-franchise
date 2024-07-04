import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 64px;
  @media only screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;
export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const HeaderLogoText = styled.span`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.03em;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const HeaderLinkWraper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding-left: 255px;
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  gap: 4px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  background-color: #fff;
  border: 1.15px solid #f1f1f1;
  padding: 8px;
  height: 46px;
  &:nth-child(2)::before {
    content: "";
    position: absolute;
    top: 19px;
    z-index: 1;
    left: -10px;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
  &:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 19px;
    z-index: 1;
    right: -11px;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
`;

export const HeaderLink = styled(NavLink)`
  background: transparent;
  border-radius: 24px;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #93939a;
  &.active {
    color: #fff;
    background-color: #59b17a;
  }
`;
