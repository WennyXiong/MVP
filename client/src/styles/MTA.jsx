import styled from 'styled-components';

const MTA = {
  Background: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    /* transform: translateZ(0); */
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 10;
    /* opacity: 0.5; */
  `,
  Container: styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    height: 60%;
    max-width: 750px;
    padding: 2.5em 1.5em 1.5em 1.5em;
    background-color: white;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    overflow: auto;
    justify-content: center;
    align-items: center;
    z-index: 20;
  `,
  Form: styled.form`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 80%;
    max-width: 750px;
    padding: 2.5em 1.5em 1.5em 1.5em;
    background-color: white;
    /* box-shadow: 0 0 10px 3px rgba(0,0,0,0.1); */
    overflow: auto;
    justify-content: center;
    align-items: center;
    z-index: 20;
  `,

  Xout: styled.div`
    display: inline-block;
    float: right;
    position: relative;
    right: 0;
    left: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  `,
  Label: styled.label`
    display: inline-block;
    width: 120px;
    height: 20px;
    padding: 10px;
    text-align: center;
  `,
  Input: styled.input`
    display: inline-block;
    border-radius: 5px;
    position: relative;
    width: 25%;
    height: 35px;
    min-width: 150px;
    position: relative;
  `,
  CloseBtn: styled.button`
    /* position: inherit; */
    top: 70%;
    margin: 20px;
    width: 120px;
    height: 40px;
    background-color: #eaeabf;
    border-radius: 5px;
    text-align: center;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
  SubmitBtn: styled.button`
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

export default MTA;
