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
  width: 88.06%;
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  /* padding: 59px 46px; */
  background-color: var(--white);
  /* border-radius: 12px; */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
  /* background: #fff; */
  border-radius: 20px;
  gap: 20px;
  @media only screen and (min-width: 335px) {
    max-width: 335px;
  }
  @media only screen and (min-width: 768px) {
    padding: 50px;
    max-width: 568px;
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
export const GoodsList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 320px;
  overflow-y: auto;
  width: 100%;
  padding: 0 20px;
`;

export const GoodsItem = styled.li`
  position: relative;

  padding: 20px 0;
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
`;

export const ImgWrap = styled.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 15px;
  /* padding: 14px 18px; */
  width: 80px;
  height: 80px;
  /* border: ${(props) =>
    props.$img ? "1.15px solid rgba(89, 177, 122, 0.6)" : "none"};
  border-radius: 20px;
  width: 130px;
  height: 130px;
  margin-top: 4px;
  overflow: hidden; */
  @media only screen and (min-width: 768px) {
    /* width: 160px;
    height: 160px; */
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
    /* width: 160px;
    height: 160px; */
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media only screen and (min-width: 768px) {
    /* width: 160px;
    height: 160px; */
  }
`;

export const MedicineName = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    /* font-size: 28px;
    line-height: 1.14286; */
  }
`;
export const MedicineBrief = styled.p`
  /* font-weight: 600; */
  font-size: 12px;
  line-height: 1.16667;
  color: #6a6a6f;
  @media only screen and (min-width: 768px) {
    /* font-size: 28px;
    line-height: 1.14286; */
  }
`;
export const MedicinePrice = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    /* font-size: 28px;
    line-height: 1.14286; */
  }
`;
