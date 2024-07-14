import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ShopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.12);
  padding-bottom: 16px;
`;

export const ShopName = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  color: var(--black);
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DataWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #93939a;
`;
export const TextSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
`;

export const ContactsWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const TextWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const EditLink = styled(Link)`
  border-radius: 30px;
  padding: 10px 24px;
  width: 97px;
  height: 38px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--green);
  background: rgba(89, 177, 122, 0.1);
`;

export const ProductsBtnWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const AddMedicine = styled.button`
  border-radius: 30px;
  padding: 10px 24px;
  width: 124px;
  height: 38px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #f7f8fa;
  background-color: var(--green);
`;
export const ProductsBtn = styled.button`
  /* border-radius: 30px;
  padding: 10px 24px;
  width: 124px;
  height: 38px; */
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => (props.$act ? "var(--black)" : "#93939a")};
  /* background-color: var(--green); */
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 32px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.$act && "var(--green)"};
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
