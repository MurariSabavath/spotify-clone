import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playlist from '../components/Playlist.component';
import Home from '../pages/Home.component';
import Login from '../pages/Login.component';
import Redirect from '../pages/Redirect.component';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/redirect" element={<Redirect />} />
      <Route path="/playlist/:id" element={<Playlist />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
