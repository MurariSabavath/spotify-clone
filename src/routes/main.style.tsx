import styled from 'styled-components/macro';

export const PageLayout = styled.div`
  display: flex;
`;

export const MainLayout = styled.div`
  margin-left: 310px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
