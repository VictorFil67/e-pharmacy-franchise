import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  color: var(--black);
  padding-bottom: 40px;
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
    height: 604px;
  }
`;
