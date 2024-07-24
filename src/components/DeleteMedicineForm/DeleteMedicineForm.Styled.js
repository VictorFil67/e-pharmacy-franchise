import styled from "styled-components";

export const QuestionText = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
  margin-top: 8px;
  margin-bottom: 21px;
`;

export const ProductName = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  margin-bottom: 4px;
  margin-top: 14px;
  @media only screen and (min-width: 768px) {
  }
`;

export const MedicineBrand = styled.span`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(29, 30, 33, 0.6);
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
