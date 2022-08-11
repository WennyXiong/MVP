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
  MDBackground: styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    padding: 10px;
    left: 0;
    top: 0;
    background-color: rgb(0 0 0 / 26%);
    justify-content: center;
    align-items: center;
    z-index: 10;
  `,
  MDContainer: styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    left: 40%;
    width: 30%;
    height: 30%;
    max-width: 410px;
    padding: 25px;
    background-color: white;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
    justify-content: center;
    align-items: center;
  `,
  Xout: styled.div`
    display: inline-block;
    float: right;
    position: relative;
    left: 92%;
    top: -40%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    z-index: 10;
    cursor: pointer;
  `,
  Form: styled.form`
    position: relative;
    top: 20%;
  `,
  Label: styled.label`
    vertical-align: middle;
    margin-right: 5px;
  `,
  Input: styled.input`
    width: 200px;
    height: 30px;
  `,
};

export default NT;
