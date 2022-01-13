export interface IHeaderProps {
  userName: string;
  userImg: string;
}

const Header = ({ userName, userImg }: IHeaderProps) => (
  <>
    <img src={userImg} alt="" />
    <h4>{userName}</h4>
  </>
);

export default Header;
