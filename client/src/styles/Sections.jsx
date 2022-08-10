import styled from 'styled-components';

const Sections = {
  NavTop: styled.div`
    margin: 10px 20px;
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
    width: 95%;
    height: 200px;
    overflow: hidden;
    background-color: #fafce9;
  `,
  JobApplications: styled.div`
    display: inline-block;
    margin: 10px 20px;
    padding: 20px;
    position: relative;
    width: 91%;
    height: fit-content;
    overflow: visible;
  `,
  Footer: styled.div`
    display: inline-block;
    width: 100%;
    height: 200px;
    background-color: #fafce9;
  `,
};

export default Sections;
