import { useEffect } from 'react';
import { getRequest } from '../service/api';

const Tracks = () => {
  useEffect(() => {
    getRequest('/playlists/6FEqTG3Usk2R5AXKEZFjHd/tracks')
      .then((resp) => console.log(resp))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <h1>tracks</h1>;
};

export default Tracks;
