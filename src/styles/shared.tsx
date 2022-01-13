import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #1db954;
  padding: 20px;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const Div = styled.div`
  width: 30%;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
