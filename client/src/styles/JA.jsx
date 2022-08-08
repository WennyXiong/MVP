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
    height: 23px;
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
    /* border: 1px solid #aaaeb2; */
    border-collapse: separate;
    border-spacing: 0 10px;
  `,
  HeadTr: styled.tr`
    /* border-bottom: 1pt solid black; */
    border: 1px solid #aaaeb2;
    height: 30px;
    word-wrap: break-word;
  `,
  Tr: styled.tr`
    word-wrap: break-word;
  `,
  Th: styled.th`
    text-align: left;
    font-weight: 600;
    border-bottom: 1px solid #aaaeb2;
  `,
  Td: styled.td`
    font-weight: 500;
    border-top: 1px solid #aaaeb2;
    border-bottom: 1px solid #aaaeb2;
  `,
};

export default JA;
