import styled from 'styled-components';

const NT = {
  Logo: styled.div`
    margin: 20px;
    display: inline-block;
    float: left;
    position: relative;
    width: 20%;
    height: 40%;
    /* border: 2px solid grey; */
    font-weight: 300px;
    font-size: 30px;
  `,
  Quote: styled.div`
    margin: 5px;
    display: inline-block;
    float: left;
    position: relative;
    left: 5%;
    width: 50%;
    height: 90%;
    border: 2px solid grey;
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
  `,
};

export default NT;
