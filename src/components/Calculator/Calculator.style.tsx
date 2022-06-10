import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: #b2b2b2;
`;

const CalculatorContainer = styled.div`
  width: 20rem;
  height: 35rem;
  margin: ${({ theme }) => theme.spacing.large} auto;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.bg.main};
  box-shadow: 4px 5px 21px #808080c4;
  display: flex;
  flex-direction: column;
  color: white;
`;

const NumbersWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ButtonsGroup = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`;

export { Container, CalculatorContainer, ButtonsGroup, NumbersWrapper };
