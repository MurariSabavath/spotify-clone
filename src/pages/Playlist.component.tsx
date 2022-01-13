import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SET_TRACK_URI } from '../constants/actions';
import { IPlaylistTracks } from '../constants/types';
import { getRequest } from '../service/api';
import store from '../store/redux-store';

const Playlist = () => {
  const { id } = useParams();
  const [playlistTracks, setPlaylistTracks] = useState<IPlaylistTracks>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequest(`/playlists/${id}/tracks`)
      .then((resp) => {
        setPlaylistTracks(resp);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const playHandler = (trackUri: string) => {
    store.dispatch({ type: SET_TRACK_URI, track: trackUri });
  };

  return (
    <div>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          {playlistTracks?.items.map(({ track }) => (
            <div key={track.id}>
              <img src={track.album.images[2].url} alt="" />
              <button type="button" onClick={() => playHandler(track?.uri)}>
                {track.name}
              </button>
              <p>{track.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Playlist;
