import styled from "styled-components";

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
  padding: 40px 20px;
  /* background: #fff; */
  border-radius: 20px;
  /* gap: 16px; */
  @media only screen and (min-width: 335px) {
    max-width: 335px;
  }
  @media only screen and (min-width: 768px) {
    padding: 40px 38px;
    max-width: 700px;
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
    right: 16px;
  }
`;
