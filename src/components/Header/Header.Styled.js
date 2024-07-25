import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 80px;
  }
  @media only screen and (min-width: 1440px) {
    justify-content: flex-start;
    padding-bottom: 100px;
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
  display: none;
  /* & > div:first-child > a {
    background-color: ${(props) =>
    (props.$path === "/create-shop" || props.$path === "/edit-shop") &&
    "var(--green)"};
    color: #93939a;
  } */
  /* & > div:first-child > a.active {
    background: transparent;
    color: #93939a;
  } */
  @media only screen and (min-width: 1440px) {
    position: relative;
    display: flex;
    flex-grow: 1;
    padding-left: 255px;

    gap: 4px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
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

  /* background-color: ${(props) =>
    (props.$path === "/create-shop" || props.$path === "/edit-shop") &&
    "var(--green)"};
  color: ${(props) =>
    props.$path === "/shop" ||
    props.$path === "/create-shop" ||
    (props.$path === "/edit-shop" && "var(--white)")}; */
`;
// export const HeaderLinkMed = styled(NavLink)`
//   background: transparent;
//   border-radius: 24px;
//   padding: 8px 20px;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 100%;
//   color: #93939a;
//   &.active {
//     color: #fff;
//     background-color: #59b17a;
//   }
/* 
  background-color: ${(props) => props.$path === "/shop" && "var(--green)"};
  color: ${(props) => props.$path === "/shop" && "var(--white)"}; */
// `;

export const BurgerButton = styled.button`
  display: block;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;
export const HeaderLogAut = styled.button`
  display: none;
  @media only screen and (min-width: 1440px) {
    display: block;
    border: 1px solid rgba(89, 177, 122, 0.5);
    border-radius: 60px;
    padding: 15px 32px;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #59b17a;
  }
`;
