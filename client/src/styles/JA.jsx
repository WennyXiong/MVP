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
    right: 0;
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
    right: 2%;
    height: 23px;
    border: 1px solid;
    border-radius: 9999px;
    background: white;
    font-size: 17px;

    &:hover {
      opacity: 0.7;
    }
  `,
};

export default JA;
