import { useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import store from '../store/redux-store';
import Header from '../components/Header.component';
import { getRequest } from '../service/api';
import { SET_TRACK_URI } from '../constants/actions';
import NavBar from '../components/nav-bar';
import { MainLayout, PageLayout } from './main.style';

const Main = () => {
  const navigate = useNavigate();
  const boxRef = useRef(null);
  const [openNavbar, setOpenNavbar] = useState(false);
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

  const closeOpenMenus = (e: any) => {
    setOpenNavbar(false);
  };

  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem('params') as string);
      if (!token) {
        navigate('/login');
      }
      getCurrentlyPlaying();
      getUser();
    } catch (err) {
      navigate('/login');
    }
    document.addEventListener('mousedown', closeOpenMenus);

    return () => document.removeEventListener('mousedown', closeOpenMenus);
  }, []);

  return (
    <>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <PageLayout>
            <NavBar openNavbar={openNavbar} />
            <div ref={boxRef}>
              <MainLayout>
                <Header
                  userName={user.display_name}
                  userImg={user.images[0].url}
                  openNavbar={openNavbar}
                  setOpenNavbar={setOpenNavbar}
                />
                <Outlet />
              </MainLayout>
            </div>
          </PageLayout>
        </>
      )}
    </>
  );
};

export default Main;
