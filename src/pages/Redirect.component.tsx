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
    localStorage.setItem('params', JSON.stringify(params));
    navigate('/');
  }, []);

  return <h1>redirect</h1>;
};

export default Redirect;
