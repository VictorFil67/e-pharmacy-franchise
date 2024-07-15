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
  width: 89%;
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
  border-radius: 27px;
  gap: 16px;
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
// export const ContentWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   align-items: center;
//   width: 100%;
//   @media only screen and (min-width: 768px) {
//     gap: 32px;
//     width: 242px;
//   }
// `;
// export const Picture = styled.img`
//   display: block;
//   margin: 0 auto;
// `;
// export const TextWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   align-items: center;
//   width: 100%;
//   @media only screen and (min-width: 768px) {
//     gap: 14px;
//   }
// `;
// export const Title = styled.h2`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 1;
//   letter-spacing: -0.02em;
//   color: var(--white);
//   @media only screen and (min-width: 768px) {
//     font-size: 20px;
//   }
// `;
// export const Text = styled.p`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   letter-spacing: -0.02em;
//   color: var(--input-title);
//   text-align: center;
// `;
// export const Span = styled.span`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   color: var(--white);
// `;
