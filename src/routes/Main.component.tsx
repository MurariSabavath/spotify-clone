import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SpotifyPlayer from 'react-spotify-web-playback';
import store from '../store/redux-store';
import Header from '../components/Header.component';
import { getRequest } from '../service/api';
import { SET_TRACK_URI } from '../constants/actions';

const Main = () => {
  const navigate = useNavigate();
  const { trackUri } = useSelector((state: { trackUri: string }) => state);
  const [acceptToken, setAcceptToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);
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

  const getUser = () => {
    getRequest('/me')
      .then((resp) => {
        setUser(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCurrentlyPlaying = async () => {
    await getRequest('/me/player/recently-played')
      .then((resp) => {
        store.dispatch({ type: SET_TRACK_URI, track: resp.items[0]?.track.uri });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem('params') as string);
      if (!token) {
        navigate('/login');
      }
      setAcceptToken(token.access_token);
      getCurrentlyPlaying();
      getUser();
    } catch (err) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <Header userName={user.display_name} userImg={user.images[0].url} />
          <Outlet />
          <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
            <SpotifyPlayer token={acceptToken} uris={[trackUri]} />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
