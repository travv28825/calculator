import styled from 'styled-components';

const Btn = styled.button`
  flex: 1;
  height: 100%;
  background-color: #b1b1b1;
  color: black;
  border: 1px solid lightgray;
  font-size: 28px;

  &:hover {
    background: gray;
    color: white;
    border: 1px solid darkgray;
  }
`;

export { Btn };
