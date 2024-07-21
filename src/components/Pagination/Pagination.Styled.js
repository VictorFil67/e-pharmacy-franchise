import styled from "styled-components";

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
    font-size: 24px;
    font-weight: 300;
  }
`;
export const Transit = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid rgba(29, 30, 33, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  & > span {
    transform: scaleX(0.6);
    font-size: 24px;
    font-weight: 300;
  }
`;

export const PaginationWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  /* gap: 4px; */
  width: 100%;
  margin-top: 40px;
  padding-bottom: 24px;
  & > .pagination {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 4px;
    /* width: 100%; */
  }
  & .page,
  /* .previous, */
  /* .next, */
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
