import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  overflow: auto;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const TitleWrap = styled.div`
  background-color: #e7f1ed;
  padding: 14px;
  width: 140%;
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3333;
  }
`;

export const TableWrap = styled.div`
  padding: 0 14px;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  color: var(--black);
  border-radius: 8px;
  padding: 20px;
  width: 439px;
  height: 460px;
  border: none;
  & th {
    padding: 14px;
    text-align: left;
    border: 1px solid rgba(29, 30, 33, 0.1);
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  & td {
    border: 1px solid rgba(29, 30, 33, 0.1);
    padding: 30px 7px 30px 14px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  & td:first-child,
  th:first-child {
    border-left: none;
    border-right: none;
    padding-left: 0;
  }
  & td:last-child,
  th:last-child {
    border-right: none;
  }
  & th {
    color: var(--placeholder);
  }
  & tr:hover {
    background-color: #f1f1f1;
  }
  & button {
    border: 1px solid rgba(89, 177, 122, 0.5);
    border-radius: 30px;
    padding: 8px 18px;
    width: 74px;
    height: 34px;
    background-color: transparent;
    color: var(--green);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.125;
    text-align: center;
    text-decoration: none;
  }
  & button:hover {
    background-color: var(--green);
    color: var(--white);
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    max-width: 100%;
    height: 512px;
  }
  @media screen and (min-width: 1440px) {
    width: 576px;
  }
`;
