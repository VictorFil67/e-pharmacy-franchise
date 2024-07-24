import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 0;
  }
`;

export const ImgWrap = styled.div`
  min-width: 280px;
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  overflow: hidden;
  height: 337px;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }
  @media only screen and (min-width: 768px) {
    width: 364px;
    height: 284px;
  }
  @media only screen and (min-width: 1440px) {
    height: 337px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 20px;
  padding: 20px;
  background: var(--white);
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 324px;
    max-height: 284px;
    padding: 32px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    padding: 20px;
    flex-direction: column;
    max-height: fit-content;
    gap: 20px;
  }
`;

export const DataWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Medicine = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const MedicineBrand = styled.span`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(29, 30, 33, 0.6);
`;

export const ControlWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  border-radius: 24px;
  padding: 10px 25px;
  width: 76px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #f7f8fa;
  background-color: var(--green);
  @media only screen and (min-width: 768px) {
  }
`;

export const DeleteButton = styled.button`
  border-radius: 24px;
  padding: 10px 16px;
  width: 76px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: var(--green);
  background-color: rgba(89, 177, 122, 0.1);
`;

export const ControlAllMedicineWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddToShopButton = styled.button`
  border-radius: 24px;
  padding: 10px 16px;
  width: 146px;
  height: 44px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #f7f8fa;
  background-color: var(--green);
  @media only screen and (min-width: 768px) {
    align-self: flex-end;
    width: 114px;
    height: 34px;
  }
  @media only screen and (min-width: 1440px) {
    align-self: flex-start;
    width: 114px;
    height: 34px;
  }
`;

export const DetailsLink = styled(Link)`
  background: transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-offset: 2px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
