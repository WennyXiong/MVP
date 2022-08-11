import styled from 'styled-components';

const Sections = {
  NavTop: styled.div`
    margin: 0 20px;
    padding: 10px 0;
    weight: 100%;
    height: 100px;
    float: top;
    overflow: hidden;
  `,
  NavLeft: styled.div`
    width: 15%;
    height: 300px;
    float: left;
    margin: 20px;
    overflow: hidden;
    border-left: 2px solid #6e4d3c;
  `,
  MainInfo: styled.div`
    width: 75%;
    height: fit-content;
    float: left;
    margin: 20px;
    overflow: visible;
  `,
  CompanySummary: styled.div`
    display: inline-block;
    margin: 20px;
    width: 92%;
    height: 230px;
    overflow-x: auto;
    /* background-color: #f6f6f6; */
    background-color: rgb(10 0 0 / 5%);
    border-radius: 10px;
    padding: 10px;
  `,
  JobApplications: styled.div`
    display: inline-block;
    margin: 10px 20px;
    padding: 20px;
    position: relative;
    width: 91%;
    height: fit-content;
    overflow: hidden;
  `,
  Footer: styled.div`
    display: inline-block;
    width: 100%;
    height: 200px;
    background-color: #f6f6f6;
  `,
};

export default Sections;
