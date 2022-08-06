import styled from 'styled-components';

const NL = {
  Div: styled.div`
    margin: 10px;
    line-height: 2;
    text-align: center;
  `,
  Span: styled.span`
    font-size: 20px;

    &:hover {
      font-weight: 600;
      cursor: pointer;
    }
  `,
  Applications: styled.div`
    position: relative;
    margin: 0px;
  `,
  Options: styled.div`

    &:hover {
      font-weight: 600;
      cursor: pointer;
    }
  `,
};

export default NL;
