import { Link } from "react-router-dom";
import styled from "styled-components";
import SvgElements from "../../images/authImg/SvgElements";
import SvgElementsTab from "../../images/authImg/SvgElementsTab";

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  margin-top: 42px;
  @media only screen and (min-width: 768px) {
    max-width: 614px;
    gap: 54px;
    margin-top: 104px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin-top: 162px;
    min-width: 100%;
  }
`;

export const PromoWrap = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
  }
`;

export const Picture = styled.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: -80px;
  right: 5px;
  @media only screen and (min-width: 375px) {
    top: -55px;
    right: 20px;
  }
  @media only screen and (min-width: 768px) {
    top: -106px;
  }
`;

export const Promo = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.28571;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 1.11;
  }
  @media only screen and (min-width: 1440px) {
    width: 611px;
  }
`;
export const Span = styled.span`
  color: var(--green);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
    max-width: 614px;
    gap: 62px;
  }
`;
export const InputBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: 768px) {
    max-width: ${(props) => !props.$reg && "323px"};
    flex-direction: ${(props) => props.$reg && "row"};
    flex-wrap: ${(props) => props.$reg && "wrap"};
    gap: 14px;
  }
`;
export const InputWrap = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Input = styled.input`
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
  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.$reg ? "280px" : "323px")};
  }
`;

export const ErrorSpan = styled.span`
  color: #e90516;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
`;

export const AuthButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: ${(props) => props.$marg && "108px"};
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    max-width: ${(props) => (props.$reg ? "280px" : "323px")};
  }
`;

export const AuthButton = styled.button`
  border-radius: 60px;
  padding: 12px 15px;
  border: none;
  background-color: var(--green);
  transition: all 0.3s;
  min-width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;

  color: var(--white);

  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 768px) {
  }
`;
export const LinkStyled = styled(Link)`
  font-size: 12px;
  line-height: 1.5;
  text-decoration: none;

  text-align: center;
  color: var(--placeholder);
  &:hover {
    color: var(--black);
  }
  @media only screen and (min-width: 768px) {
  }
`;
export const Elements = styled(SvgElements)`
  position: absolute;
  bottom: 0;
  right: 0;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const ElementsTab = styled(SvgElementsTab)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
