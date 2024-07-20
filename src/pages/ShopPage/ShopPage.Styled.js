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

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputWrap = styled.label`
  position: relative;
  /* display: flex;
  flex-direction: column;
  gap: 8px;
  &:last-child {
    border-radius: 60px;
    padding: 13px 15px;
    border: none;
    background-color: var(--green);
    transition: all 0.3s;
    min-width: 100%;
    gap: 0;
    margin-top: 8px;
    transition: transform 0.3s ease;
    &:hover,
    &:active {
      background-color: var(--active);
      transform: scale(1.1);
    }
    & > input {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      opacity: 0;

    }
    & > span {
      display: none;
    } */
  @media only screen and (min-width: 768px) {
    /* min-width: 200px;
      height: 44px;
      margin-top: 26px; */
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
    width: 200px;
    /* flex-direction: ${(props) => props.$reg && "row"};
    flex-wrap: ${(props) => props.$reg && "wrap"};
    gap: 14px; */
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
  /* padding: 13px 28px; */
  padding: 13px;
  border: none;
  background-color: var(--green);
  transition: all 0.3s;
  /* min-width: 100%; */
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  /* margin-top: 20px; */
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

export const Pagination = styled.nav`
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
`;
