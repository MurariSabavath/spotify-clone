import { useEffect, useState } from 'react';
import { getRequest } from '../service/api';

export interface Images {
  height: number;
  url: string;
}

export interface IPlaylistItem {
  collaborative: false;
  description: string;
  external_urls: {};
  href: string;
  id: string;
  images: Images[];
  name: string;
  owner: {};
  primary_color: null | string;
  public: boolean;
  snapshot_id: string;
  tracks: {};
  type: string;
  uri: string;
}

export interface IPlaylists {
  href: string;
  items: IPlaylistItem[];
  limit: string;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
}

const Playlists = () => {
  const [playlistsObj, setPlaylistObj] = useState<IPlaylists>();
  useEffect(() => {
    getRequest('/me/playlists')
      .then((resp) => {
        setPlaylistObj(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(playlistsObj);

  return (
    <>
      {playlistsObj?.items.map(({ id, images }) => (
        <div key={id} style={{ marginTop: '4px' }}>
          <>
            <a href={`/playlist/${id}`}>
              <img src={images[0].url} alt="" />
            </a>
          </>
        </div>
      ))}
    </>
  );
};

export default Playlists;
