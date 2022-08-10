import styled from 'styled-components';

const NT = {
  Logo: styled.div`
    margin: 20px 20px 20px 0;
    padding: 10px;
    display: inline-block;
    float: left;
    position: relative;
    width: 20%;
    height: 40%;
    border-left: 2px solid #6e4d3c;
    border-bottom: 2px solid #6e4d3c;
    font-weight: 500px;
    font-size: 30px;
    cursor: pointer;
    /* font-family: 'Dancing Script'; */
    /* color: #79A3B1; */
  `,
  Quote: styled.div`
    margin: 5px;
    display: inline-block;
    float: left;
    position: relative;
    left: 7%;
    width: 50%;
    height: 90%;
    font-family: 'Special Elite', cursive;
    text-align: center;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    `,
  RenewButton: styled.span`
    display: inline-flex;
    float: initial;
    position: relative;
    margin-left: 3px;
    width: 5%;
    height: 25%;

    &:hover {
      cursor: pointer;
    }
  `,
};

export default NT;
