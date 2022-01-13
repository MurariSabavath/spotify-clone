import { putRequest } from '../service/api';

const Track = ({ trackUri, name }: { trackUri: string; name: string }) => {
  const handlePlay = () => {
    putRequest('/me/player/play', {
      context_uri: trackUri,
      offset: { position: 0 },
      position_ms: 0,
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(trackUri);
  return (
    <>
      <h1>{name}</h1>
      <button type="button" onClick={handlePlay}>
        play
      </button>
    </>
  );
};

export default Track;
