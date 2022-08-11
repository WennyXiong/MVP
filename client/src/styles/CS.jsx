import styled from 'styled-components';

const CS = {
  Header: styled.h3`
    margin: 0;
    display: block;
    float: left;
    width: 80%;
  `,
  CompanyBox: styled.div`
    margin: 5px;
    position: relative;
    top: 10px;
    float: left;
    width: 270px;
    height: 80px;
    border: 1px solid;
    background-color: #f6f6f6;
  `,
  Thumbnail: styled.img`
    position: relative;
    top: 10%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid;
  `,
  AvatarContainer: styled.div`
    display: inline-block;
    width: 70px;
    height: 70px;
  `,
  CompanyName: styled.div`
    display: inline-block;
    position: relative;
    top: 10%;
    left: 3%;
    width: 170px;
    height: 60px;
    /* border: 1px solid; */
  `,
};

export default CS;
