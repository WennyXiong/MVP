import styled from 'styled-components';

const Sections = {
  NavTop: styled.div`
    margin: 20px;
    height: 100px;
    overflow: hidden;
    background-color: #ecdff1;
  `,
  NavLeft: styled.div`
    display: inline-block;
    margin: 20px;
    width: 15%;
    height: 600px;
    overflow: hidden;
    background-color: #d1f0ef;
  `,
  MainInfo: styled.div`
    display: inline-block;
    margin: 20px;
    width: 70%;
    height: 600px;
    overflow: hidden;
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
