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
    /* padding: 50px; */
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
  padding: 40px 20px;
  /* background: #fff; */
  border-radius: 20px;
  gap: 16px;
  @media only screen and (min-width: 335px) {
    max-width: 335px;
  }
  @media only screen and (min-width: 768px) {
    padding: 50px;
    max-width: 568px;
    gap: 10px;
  }
  @media only screen and (min-width: 1440px) {
    /* padding: 40px; */
    /* width: 708px; */
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
