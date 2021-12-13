const Login = () => {
  const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } = process.env;
  const SPACE_DELIMITER = '%20';
  const SCOPES = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-library-read',
    'user-library-modify',
    'user-read-currently-playing',
    'user-read-playback-state',
    'playlist-read-private',
  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
  const handleLogin = () => {
    window.location.href = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  return (
    <button type="button" onClick={handleLogin}>
      Login with spotify
    </button>
  );
};

export default Login;