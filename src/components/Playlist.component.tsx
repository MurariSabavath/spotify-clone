import { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useParams } from 'react-router-dom';
import { ITracksList } from '../constants/types';
import { getRequest } from '../service/api';

export interface IPlaylistTracks {
  href: string;
  items: ITracksList[];
  limit: number;
  next: string;
  offset: number;
  previous: null | string;
  total: number;
}

const Playlist = () => {
  const { id } = useParams();
  const [acceptToken, setAcceptToken] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState<IPlaylistTracks>();
  const [trackUri, setTrackUri] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('params') as string);
    setAcceptToken(token.access_token);
    getRequest(`/playlists/${id}/tracks`)
      .then((resp) => {
        setPlaylistTracks(resp);
        setTrackUri(resp.items[0].track.uri);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          <h1>hello world</h1>
          {playlistTracks?.items.map(({ track }) => (
            <div key={track.id}>
              <img src={track.album.images[2].url} alt="" />
              <button type="button" onClick={() => setTrackUri(track.uri)}>
                {track.name}
              </button>
              <p>{track.name}</p>
            </div>
          ))}
          <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
            <SpotifyPlayer token={acceptToken} uris={[trackUri]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Playlist;
