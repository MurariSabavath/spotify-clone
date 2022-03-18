import styled from 'styled-components/macro';
import { PageLink } from '../navbar/styled';

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

export const MobileNavLink = styled(PageLink)`
  svg {
    margin: 0;
    padding: 10px;
  }
`;
