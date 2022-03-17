import { Route, Routes } from 'react-router-dom';
import { Home, Login, Playlist, Playlists, Redirect } from './pages';
import Main from './routes/main.component';
import CustomRouter from './routes/custom-router';
import history from './routes/browser-history';

const App = () => (
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

export default App;
