import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    width: 226px;
  }
  @media only screen and (min-width: 1440px) {
    width: 280px;
    gap: 14px;
  }
`;

export const ImgWrap = styled.div`
  min-width: 226px;
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 260px;
  }
  @media only screen and (min-width: 1440px) {
    height: 280px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 20px;
  background: var(--white);
`;

export const DataWrap = styled.div`
  display: flex;
  justify-content: space-between;
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
    font-size: 18px;
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
  width: 114px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #f7f8fa;
  background-color: var(--green);
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
