import styled from 'styled-components/macro';

export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background: black;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLayout = styled.div``;
