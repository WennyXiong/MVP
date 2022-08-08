import styled from 'styled-components';

const JA = {
  Header: styled.h3`
    margin: 0;
    display: inline-block;
    float: left;
    width: 20%;
  `,
  SortBy: styled.select`
    display: inline-block;
    float: right;
    position: relative;
    right: 3%;
    width: 10%;
    height: 25px;
    border-radius: 5px;

    &:hover {
      opacity: 0.7;
    }
  `,
  AddButton: styled.button`
    display: inline-block;
    float: right;
    position: relative;
    right: 5%;
    height: 25px;
    border: 1px solid;
    border-radius: 9999px;
    background: white;
    font-size: 17px;

    &:hover {
      opacity: 0.7;
    }
  `,
  ApplicationTable: styled.table`
    table-layout: fixed;
    position: relative;
    top: 20px;
    width: 100%;
    border: 1px solid grey;
  `,
  HeadTh: styled.th`
    font-weight: 600;
  `,
  Th: styled.th`
    font-weight: 500;
  `,
};

export default JA;
