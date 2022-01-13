import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Playlist, Playlists, Redirect } from '../pages';
import Main from './Main.component';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/redirect" element={<Redirect />} />
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/playlists" element={<Playlists />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
