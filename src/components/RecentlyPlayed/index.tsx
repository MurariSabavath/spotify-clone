import { useEffect } from 'react';
import { getRequest } from '../../service/api';

const RecentlyPlayed = () => {
  useEffect(() => {
    getRequest('/me/top/artists')
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return <h1>Recently Played</h1>;
};

export default RecentlyPlayed;
