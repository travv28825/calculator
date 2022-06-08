import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  margin: 3rem 12rem; ;
`;

const CalculatorContainer = styled.div`
  width: 25rem;
  height: 27rem;
  padding: 1rem;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  background: #c3bfbf;
  box-shadow: 4px 5px 21px #808080c4;
`;

const NumbersWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 150px;
  width: 96%;
  margin: auto;
`;

const OperationsWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 1rem auto;
  height: calc(386px / 6);
  width: 96%;
  display: flex;
`;

const ButtonsGroup = styled.div`
  width: 100%;
  height: calc(100% / 3);
  display: flex;
`;

export {
  Container,
  CalculatorContainer,
  OperationsWrapper,
  ButtonsGroup,
  NumbersWrapper,
};
