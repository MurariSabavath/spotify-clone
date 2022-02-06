import { Routes, Route } from 'react-router-dom';
import { Home, Login, Playlist, Playlists, Redirect } from '../pages';
import Main from './Main.component';
import history from './browser-history';
import CustomRouter from './custom-router';

const AppRouter = () => (
  <CustomRouter history={history}>
    <Routes>
      <Route path="/redirect" element={<Redirect />} />
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/playlists" element={<Playlists />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </CustomRouter>
);

export default AppRouter;
