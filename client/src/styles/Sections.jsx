import styled from 'styled-components';

const Sections = {
  NavTop: styled.div`
    margin: 10px 20px;
    weight: 100%;
    height: 100px;
    float: top;
    overflow: hidden;
    background-color: #ecdff1;
  `,
  NavLeft: styled.div`
    width: 15%;
    height: 600px;
    float: left;
    margin: 20px;
    overflow: hidden;
    background-color: #d1f0ef;
  `,
  MainInfo: styled.div`
    width: 70%;
    height: 600px;
    float: left;
    margin: 20px;
    overflow: visible;
    background-color: #fafce9;
  `,
  CompanySummary: styled.div`
    display: inline-block;
    margin: 20px;
    width: 95%;
    height: 200px;
    overflow: hidden;
    background-color: #e6f4e1;
  `,
  JobApplications: styled.div`
    display: inline-block;
    margin: 10px 20px;
    width: 95%;
    height: 350px;
    overflow: hidden;
    background-color: #e6f4e1;
  `,
};

export default Sections;
