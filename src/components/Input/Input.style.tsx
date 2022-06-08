import styled from 'styled-components';

const DisplayContainer = styled.div`
  position: relative;
  min-height: 4.5rem;
`;

const Display = styled.div`
  position: relative;
  overflow: hidden;

  input {
    width: 92%;
    height: 1.5rem;
    padding: 0.5rem 0.5rem;
    margin: 1rem 2%;
    border: 0;
    border-radius: 4px;
  }
`;

const FutureEqual = styled.span`
  position: absolute;
  right: calc(2% + 1rem);
  bottom: 0.5rem;
  color: #706e6e;
`;

export { DisplayContainer, Display, FutureEqual };
