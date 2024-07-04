import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    backdrop-filter: grayscale(0%) blur(0);
  }
  to {
    backdrop-filter: grayscale(100%) blur(2px);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 30, 33, 0.45);
  backdrop-filter: grayscale(0%) blur(0);
  z-index: 2;
  animation: ${fadeIn} 0.3s ease-in forwards;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerContainer = styled.div`
  background-color: #59b17a;
  width: 210px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 197px;
  padding: 31px 20px 40px;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* z-index: 3; */
  transition: transform 0.7s cubic-bezier(0.01, 0.01, 0.58, 1),
    opacity 0.7s ease;
  @media only screen and (min-width: 768px) {
    padding: 39px 32px 64px;
    gap: 279px;
    width: 334px;
  }
`;

export const BurgerButtonExit = styled.button`
  align-self: flex-end;
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerLinkWraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    top: -7px;
    /* z-index: 10; */
    left: 49px;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
  &:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 43px;
    /* z-index: 10; */
    left: 49px;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
`;

export const BurgerLink = styled(NavLink)`
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

export const BurgerButtonLogAut = styled.button`
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;
  padding: 12px 27px;
  width: 107px;
  height: 40px;
  background: transparent;

  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #f1f1f1;
`;

// export const HeaderLink = styled(NavLink)`
//   color: #686868;
//   position: relative;
//   cursor: pointer;
//   transition: color 0.5s ease, transform 0.6s ease;

//   &:hover {
//     transform: scale(1.3);
//     color: #fff;
//   }

//   &.active {
//     color: #f9f9f9;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     bottom: -8px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 0;
//     height: 4px;
//     background-color: #4f92f7;
//     border-radius: 20px;
//     transition: width 0.5s ease-in-out;
//   }

//   &.active::before {
//     width: 100%;
//     opacity: 1;
//   }

//   &.inactive::before {
//     width: 0;
//     opacity: 0;
//   }
// `;
