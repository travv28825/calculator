import styled, { css } from 'styled-components';
import ElementPropStyledComponent from '../../interfaces/StyledComponent.interface';

const Btn = styled.button`
  /* flex: 1; */
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightgray};
  color: white;
  font-size: 28px;
  border-top: 0.1px solid ${({ theme }) => theme.bg.main};
  border-right: 1px solid ${({ theme }) => theme.bg.main};

  &:hover{
    color: white;
    background-color: ${({ theme }) => theme.colors.darkgray};
  }

  ${({ align }: ElementPropStyledComponent) =>
    align &&
    css`
      flex: ${align};
  `}

  ${({ primary }: ElementPropStyledComponent) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
  `}
      
  ${({ dark }: ElementPropStyledComponent) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.colors.darkgray};
          
    &:hover{
      background-color: ${({ theme }) => theme.colors.lightgray};
    }
  `}
`;

export { Btn };
