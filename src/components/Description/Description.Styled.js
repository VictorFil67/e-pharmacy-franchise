import styled from "styled-components";

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  line-height: 1.28571;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
