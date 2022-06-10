import styled from 'styled-components';

const WrapperDisplay = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  background: linear-gradient(332deg, black, rgb(56 56 56 / 86%));
`;

const HeaderDisplay = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  display: flex;
  justify-content: end;
  align-items: center;
`;

const AreaDisplay = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  textarea {
    resize: 'none';
    width: 60%;
    height: 100%;
    background-color: transparent;
    color: white;
    text-align: end;
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};

    &:focus-visible{
      outline:none ;
    }
  }
`;

const ResultDisplay = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export { WrapperDisplay, HeaderDisplay, AreaDisplay, ResultDisplay };
