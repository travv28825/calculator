import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  height: auto;
  width: 100%;
`;

const CalculatorContainer = styled.div`
  max-width: 20rem;
  height: 35rem;
  margin: ${({ theme }) => theme.spacing.large} auto;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.bg.main};
  box-shadow: 4px 4px 7px rgb(118 117 117 / 25%);
  display: flex;
  flex-direction: column;
  color: white;
  border: 1px solid rgb(128 128 128 / 75%);
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
