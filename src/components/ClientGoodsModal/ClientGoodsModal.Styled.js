import { Link } from "react-router-dom";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(29, 30, 33, 0.45);
  z-index: 1;
  overflow: auto;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1280px) {
  }
`;
export const Modal = styled.div`
  width: 90%;
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  background-color: var(--white);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
  border-radius: 20px;
  gap: 20px;
  height: 546px;
  @media only screen and (min-width: 335px) {
    max-width: 335px;
  }
  @media only screen and (min-width: 768px) {
    padding: 40px 50px 50px;
    max-width: 613px;
    height: 632px;
    gap: 30px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px;
    width: 708px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  padding: 0;
  @media only screen and (min-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e7f1ed;
  border: 0px solid rgba(29, 30, 33, 0.08);
  border-radius: 8px;
  width: 100%;
  height: 58px;
  gap: 4px;
  padding: 12px 16px;
  @media only screen and (min-width: 375px) {
    padding: 10px 28px;
  }
`;

export const ClientDataTitle = styled.h4`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.16667;
  color: rgba(29, 30, 33, 0.4);
  @media only screen and (min-width: 375px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const ClientDataText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.28571;
  color: var(--black);
  white-space: nowrap;
  @media only screen and (min-width: 375px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  width: 100%;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const GoodsItem = styled.li`
  position: relative;

  padding: 20px 0;
  &:first-child {
    padding-top: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(29, 30, 33, 0.1);
  }
`;

export const MtdicineLink = styled(Link)`
  display: flex;
  gap: 12px;
  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const ImgWrap = styled.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 15px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media only screen and (min-width: 768px) {
  }
`;

export const MedicineName = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.4;
  }
`;
export const MedicineBrief = styled.p`
  font-size: 12px;
  line-height: 1.16667;
  color: #6a6a6f;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const MedicinePrice = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  @media only screen and (min-width: 768px) {
  }
`;
