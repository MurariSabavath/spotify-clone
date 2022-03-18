import { IAlbum, IArtist, ITrack, ITracksList } from '../../constants/types';
import { Container, ImageContainer, MobileContainer, TrackNameContainer } from './styled';

export interface ITrackListProps {
  track: ITrack;
  index: number;
  added_at: string;
}
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TrackList = ({ track, index, added_at }: ITrackListProps) => {
  const millisToMinutesAndSeconds = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    const newLocal = parseInt(seconds, 10) < 10;
    return `${minutes}:${newLocal ? '0' : ''}${seconds}`;
  };

  const date = new Date(added_at);
  const formatedDate = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <>
      <Container>
        <p>{index + 1}</p>
        <ImageContainer>
          <img src={track.album.images[0].url} alt="" />
          <TrackNameContainer>
            <div>{track.name}</div>
            <div>{track.artists.map(({ name }) => name).join(', ')}</div>
          </TrackNameContainer>
        </ImageContainer>
        <div>{track.album.name}</div>
        <div>{formatedDate}</div>
        <div>{millisToMinutesAndSeconds(track.duration_ms)}</div>
      </Container>
      <MobileContainer>
        <ImageContainer>
          <img src={track.album.images[0].url} alt="" />
          <TrackNameContainer>
            <div>{track.name}</div>
            <div>{track.artists.map(({ name }) => name).join(', ')}</div>
          </TrackNameContainer>
        </ImageContainer>
        <div>{millisToMinutesAndSeconds(track.duration_ms)}</div>
      </MobileContainer>
    </>
  );
};

export default TrackList;
