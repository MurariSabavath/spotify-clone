import React from 'react';

export interface IHeaderProps {
  userName: string;
  userImg: string;
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ userName, userImg, openNavbar, setOpenNavbar }: IHeaderProps) => (
  <>
    <img src={userImg} alt="" />
    <h4>{userName}</h4>
    <button type="button" onClick={() => setOpenNavbar(!openNavbar)}>
      open
    </button>
  </>
);

export default Header;
