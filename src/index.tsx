import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store/redux-store';
import App from './App';
import GlobalStyles from './global-styles/global.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{ background: 'black' }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
