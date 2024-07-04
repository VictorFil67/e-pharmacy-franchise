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
  z-index: 3;
  transition: transform 0.7s cubic-bezier(0.01, 0.01, 0.58, 1),
    opacity 0.7s ease;
`;
export const BurgerMenu = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 260px;
  padding-bottom: 40px; */
  /* gap: 4px; */
  /* transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  } */
`;
// export const BurgerLinkWraper = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-direction: column;
//   align-items: flex-start;
// `;
export const BurgerLinkWraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
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
  /* width: 112px; */
  padding: 8px;
  height: 46px;
  /* &:first-child::after {
    content: "";
    position: absolute;
    top: 35px;
    z-index: 10;
    left: 39%;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  } */
  &:nth-child(2)::before {
    content: "";
    position: absolute;
    top: -7px;
    z-index: 10;
    left: 65px;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
  &:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 43px;
    z-index: 10;
    left: 65px;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
`;
export const BurgerLink = styled(NavLink)`
  /* position: relative; */
  /* background: #d9d9d9; */
  /* margin: auto; */
  background: transparent;
  border-radius: 24px;
  padding: 8px 20px;
  /* border: 8px solid white;
  box-shadow: 0 0 0 1px #f1f1f1; */
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #93939a;
  &.active {
    color: #fff;
    background-color: #59b17a;
  }
  /* &:first-child::after {
    content: "";
    position: absolute;
    top: 35px;
    z-index: 10;
    left: 39%;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  }
  &:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 35px;
    z-index: 10;
    left: 43%;
    width: 15px;
    height: 8px;
    background-color: #ffffff;
  } */
`;
export const BurgerContainerContant = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const BurgerButtonLogAut = styled.button`
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;
  padding: 13px 28px;
  width: 107px;
  height: 40px;
  background: transparent;

  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #f1f1f1;
`;
export const BurgerButtonWraper = styled.div`
  padding-bottom: 40px;
`;
export const BurgerExit = styled.div`
  padding-top: 34px;
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;
export const BurgerButtonExit = styled.button`
  /* position: absolute;
  top: 3%;
  right: 20px; */
  align-self: flex-end;
`;

export const HeaderLink = styled(NavLink)`
  color: #686868;
  position: relative;
  cursor: pointer;
  transition: color 0.5s ease, transform 0.6s ease;

  &:hover {
    transform: scale(1.3);
    color: #fff;
  }

  &.active {
    color: #f9f9f9;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background-color: #4f92f7;
    border-radius: 20px;
    transition: width 0.5s ease-in-out;
  }

  &.active::before {
    width: 100%;
    opacity: 1;
  }

  &.inactive::before {
    width: 0;
    opacity: 0;
  }
`;
