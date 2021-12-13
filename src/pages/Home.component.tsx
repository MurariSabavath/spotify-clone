import { useEffect, useState } from 'react';
import Playlists from '../components/Playlists.component';
import { getRequest } from '../service/api';

const Home = () => {
  const [user, setUser] = useState({
    display_name: '',
    external_urls: {},
    followers: {},
    href: '',
    id: '',
    images: [{ url: '' }],
    type: '',
    uri: '',
  });

  useEffect(() => {
    getRequest('/me')
      .then((resp) => {
        setUser(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <h1>{user.display_name}</h1>

      <img src={user.images[0].url} alt="" />
      <Playlists />
    </>
  );
};

export default Home;
