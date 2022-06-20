import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MENU_OPTIONS from './pages/MENU_OPTIONS';
import { store } from './redux';
import Routes from './pages/Routes';
import I18n from './utils/i18n';
import Layout from './components/layout';

function App() {
  return <BrowserRouter>
    <Provider store={store}>
      <I18n>
        <Layout menus={MENU_OPTIONS}>
          <Routes />
        </Layout>
      </I18n>
    </Provider>;
  </BrowserRouter>
}

export default App;
