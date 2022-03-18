import React from 'react';
import { HeaderContainer } from './styled';

export interface IHeaderProps {
  userName: string;
  userImg: string;
}

const Header = ({ userName, userImg }: IHeaderProps) => (
  <HeaderContainer>
    <p style={{ margin: '0px' }}>{userName}</p>
  </HeaderContainer>
);

export default Header;
