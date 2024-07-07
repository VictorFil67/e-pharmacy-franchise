import { Link } from "react-router-dom";
import styled from "styled-components";
import SvgElements from "../../images/authImg/SvgElements";

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const Picture = styled.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: -12px;
  right: 20px;
`;

export const Promo = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.28571;
  color: var(--black);
  margin-top: 22px;
  @media only screen and (min-width: 768px) {
    /* font-size: 16px;
      line-height: 1.25; */
  }
  @media only screen and (min-width: 1440px) {
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
`;
export const InputBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  /* width: 335px; */
  /* height: 44px; */
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
  /* letter-spacing: 0.02em; */
  color: var(--white);

  &:hover,
  &:active {
    background-color: var(--active);
  }
  @media only screen and (min-width: 768px) {
    /* padding: 16px 45px;
    width: 166px;
    font-size: 20px;
    line-height: 1; */
  }
`;
export const LinkStyled = styled(Link)`
  /* font-weight: 400; */
  font-size: 12px;
  line-height: 1.5;
  text-decoration: none;
  /* text-decoration-skip-ink: none; */
  text-align: center;
  color: var(--placeholder);
  &:hover {
    color: var(--black);
  }
  @media only screen and (min-width: 768px) {
    /* font-size: 14px;
    line-height: 1.28571; */
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
