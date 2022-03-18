import styled from 'styled-components/macro';

export interface INavBarContainerProps {
  openNavbar: Boolean;
}

export const NavBarContainer = styled.div`
  position: fixed;
  height: 100%;
  padding-top: 20px;
  width: 300px;
  background: #000000;
  overflow: hidden;
  transition: 0.4s linear;
  z-index: 1;
  width: 300px;

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
  margin-block: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.005rem;
  background: rgba(255, 255, 255, 0.2);
`;
