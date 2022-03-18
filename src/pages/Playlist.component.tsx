import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPlaylistTracks } from '../constants/types';
import { getRequest } from '../service/api';
import TrackList from '../components/track-list';

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

  return (
    <div>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          <>
            {playlistTracks?.items.map((item, index) => (
              <TrackList
                key={item.track.id}
                added_at={item.added_at}
                track={item.track}
                index={index}
              />
            ))}
          </>
        </>
      )}
    </div>
  );
};

export default Playlist;
