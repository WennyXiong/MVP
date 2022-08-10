import styled from 'styled-components';

const MTU = {
  Background: styled.div`
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
  Container: styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    left: 27%;
    width: 70%;
    height: 70%;
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
    left: 98%;
    top: -47%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    z-index: 10;
    cursor: pointer;
  `,
  UpdateForm: styled.form`
    position : relative;
    width  : 90%;
    height : 80%;
    margin : 0 auto;
    padding: 1em;
    box-sizing: border-box;
    background : #FFF url(background.jpg);

    display  : grid;
    grid-gap : 20px;
    grid-template-columns : repeat(2, 1fr);
    grid-template-rows: 30px 30px 30px 30px 30px 30px 30px 80px;
  `,
  Label: styled.label`
    vertical-align: middle;
    /* padding: 10px;
    box-sizing: border-box; */
    /* float: left;
    position: relative; */
  `,
  Input: styled.input`
    /* margin: 5px;
    height: 20px;
    box-sizing: border-box; */
    /* float: left;
    position: relative; */
    /* left: 3%; */
  `,
};

export default MTU;
