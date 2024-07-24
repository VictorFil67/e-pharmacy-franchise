import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchSvg from "../../images/shopImg/SearchSvg";

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
  @media only screen and (min-width: 768px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1440px) {
    /* flex-direction: row; */
    /* row-gap: 40px;
    column-gap: 21px; */
  }
`;
export const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border-bottom: 1px solid rgba(29, 30, 33, 0.12); */
  /* padding-bottom: 16px; */
  @media only screen and (min-width: 768px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
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
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const DataWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #93939a;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
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
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
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
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => (props.$act ? "var(--black)" : "#93939a")};
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
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    &::after {
      top: 34px;
      left: 0;
      width: 100%;
    }
    &:first-child {
      padding: 0 10px;
    }
  }
`;

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 14px;
  }
`;

export const InputWrap = styled.label`
  position: relative;
  @media only screen and (min-width: 768px) {
  }
`;

export const InputFilter = styled.input`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 12px 18px;
  min-width: 100%;
  background: var(--white);
  outline: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black);
  &:last-child {
  }
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
  @media only screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const SearchSvgStyled = styled(SearchSvg)`
  position: absolute;
  top: 14px;
  right: 17px;
`;

export const ButtonFilter = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  border-radius: 60px;
  align-items: center;
  padding: 13px;
  border: none;
  background-color: var(--green);
  transition: all 0.3s;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #f7f8fa;
  width: 116px;
  height: 44px;
  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 335px) {
    max-width: 148px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 167px;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 13px;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 1440px) {
    row-gap: 40px;
    column-gap: 21px;
  }
`;

export const Edge = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid rgba(29, 30, 33, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  & > span {
    transform: scaleX(1.5);
    font-size: 28px;
    font-weight: 300;
  }
`;

export const Pagination = styled.div`
  display: flex;
  gap: 4px;
  & > .pagination {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  & .page,
  .previous,
  .next,
  .break {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid rgba(29, 30, 33, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    font-weight: 700;
    font-size: 14px;
    line-height: 1.28571;
  }
  & .page.activePage {
    background-color: var(--green);
    color: var(--white);
  }
  & .previousLink,
  .nextLink {
    transform: scaleX(0.5);
    font-size: 28px;
    font-weight: 500;
  }
  /* @media only screen and (min-width: 768px) {
    max-width: 446px;
  } */
`;
