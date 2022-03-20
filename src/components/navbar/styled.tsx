import styled from 'styled-components/macro';

export interface INavBarContainerProps {
  openNavbar: Boolean;
}

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding-top: 20px;
  width: 300px;
  background: #000000;
  overflow: hidden;
  z-index: 1;
  overflow-x: hidden;

  > div {
    padding: 10px 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBarLayout = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Icon = styled.div`
  width: 150px;
`;

export const NavBarLinks = styled.div``;

export const PageLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  display: flex;
  padding-block: 10px;
  align-items: center;

  svg {
    padding-right: 20px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.005rem;
  background: rgba(255, 255, 255, 0.2);
`;
