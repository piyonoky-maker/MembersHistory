import styled from 'styled-components';

export const MyLable = styled.label`
  font-size: 14px;
  color: #414149;
  display: block;
  margin-bottom: 40px;
`;

export const MyInput = styled.input`
  width: 275px;
  display: block;
  height: 32px;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
  &:focus,
  &:hover {
    border-bottom: 2px solid #004fff;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: lightgray;
    font-size: 13px;
  }
`;

export const DefalultTable = styled.table`
  .tg {
    border-collapse: collapse;
    border-color: #aaa;
    border-spacing: 0;
    margin: 0px auto;
  }
  .tg td {
    background-color: #fff;
    border-color: #aaa;
    border-style: solid;
    border-width: 0px;
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 14px;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }
  .tg th {
    background-color: #f38630;
    border-color: #aaa;
    border-style: solid;
    border-width: 0px;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }
  .tg .tg-baqh {
    text-align: center;
    vertical-align: top;
  }
`;
