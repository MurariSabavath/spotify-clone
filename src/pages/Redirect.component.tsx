import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  /* eslint implicit-arrow-linebreak:  off */
  const getParamValues = (url: string) =>
    url
      .slice(1)
      .split('&')
      .reduce((prev: any, curr: any) => {
        const [title, value] = curr.split('=');
        /* eslint no-param-reassign: "off" */
        prev[title] = value;
        return prev;
      }, {});

  useEffect(() => {
    const params = getParamValues(window.location.hash);
    const expiryTime = new Date().getTime() + params.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(params));
    localStorage.setItem('expiry_time', expiryTime.toString());
    navigate('/');
  }, []);

  return <h1>redirect</h1>;
};

export default Redirect;
