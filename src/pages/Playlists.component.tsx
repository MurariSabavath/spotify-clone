import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  FlexBox,
  Img,
  PlaylistAuthor,
  PlaylistComponent,
  PlaylistHeading,
} from '../components/Playlists/style';
import { IPlaylists } from '../constants/types';
import { getRequest } from '../service/api';

const Playlists = () => {
  const [playlistsObj, setPlaylistObj] = useState<IPlaylists>();
  useEffect(() => {
    getRequest('/me/playlists')
      .then((resp) => {
        setPlaylistObj(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        {playlistsObj?.items.map(({ id, images, name, owner }) => (
          <FlexBox key={id} style={{ marginTop: '4px' }}>
            <Link to={`/playlist/${id}`} style={{ textDecoration: 'none' }}>
              <PlaylistComponent>
                <Img src={images[0].url} alt="" />
              </PlaylistComponent>
              <PlaylistHeading>{name}</PlaylistHeading>
              <PlaylistAuthor>
                By
                <span style={{ marginInline: '5px' }}>{owner.display_name}</span>
              </PlaylistAuthor>
            </Link>
          </FlexBox>
        ))}
      </Container>
    </div>
  );
};

export default Playlists;
