import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  /* padding: 14px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  border: 1px solid rgba(29, 30, 33, 0.1);
  overflow: auto;

  /* width: 80%;
  margin: auto; */
`;

export const TitleWrap = styled.div`
  background-color: #e7f1ed;
  padding: 14px;
  width: 140%;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--black);
`;

export const TableWrap = styled.div`
  padding: 0 14px;
  /* border: none; */
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
  }
  & td {
    border: 1px solid rgba(29, 30, 33, 0.1);
    padding: 30px 7px 30px 14px;
  }
  & td:first-child,
  th:first-child {
    border-left: none;
    border-right: none;
    padding-left: 0;
  }
  & td:last-child,
  th:last-child {
    /* border-left: none; */
    border-right: none;
    /* padding-left: 0; */
  }
  & th {
    color: var(--placeholder);
  }
  & tr:nth-child(even) {
    /* background-color: #f9f9f9; */
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
    /* border: none;
    border-radius: 4px; */
    color: var(--green);
    /* cursor: pointer; */
    font-weight: 500;
    font-size: 16px;
    line-height: 1.125;
    /* padding: 8px 12px; */
    text-align: center;
    text-decoration: none;
    /* display: inline-block; */
  }
  & button:hover {
    background-color: var(--green);
    color: var(--white);
  }
`;
