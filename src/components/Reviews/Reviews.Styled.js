import styled from "styled-components";

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  padding: 14px 28px;
  width: 295px;
  background: var(--white);
  @media only screen and (min-width: 768px) {
    width: 640px;
  }
`;
export const Author = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;
export const Rating = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(29, 30, 33, 0.6);
  @media only screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
`;

export const Testimonial = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  color: #6a6a6f;
`;
