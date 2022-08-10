import styled from 'styled-components';

const MTD = {
  Background: styled.div`
    width: 20vw;
    height: 20vh;
    position: fixed;
    display: flex;
    justify-content: center;
    left: 55%;
    background-color: rgba(200, 200, 200);
    align-items: center;
  `,
  Container: styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    width: 20%;
    height: 15%;
    max-width: 750px;
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
    left: 50%;
    top: -15%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  `,
  P: styled.p`
    margin-bottom: 20px;
    text-align: center;
  `,
  DeleteBtn: styled.button`
    top: 70%;
    left: 10%;
    margin: 20px;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background-color: palevioletred;
    color: white;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
};

export default MTD;
