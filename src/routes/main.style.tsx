import styled from 'styled-components/macro';

export const PageLayout = styled.div`
  display: flex;
  width: 100%;
`;

export const MainHeader = styled.div``;

export const MainLayout = styled.div`
  margin-left: 310px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`;
