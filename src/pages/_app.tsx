import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../web-core/layout'
import MENU_OPTIONS from './MENU_OPTIONS'
import I18n from '../web-core/i18n'
import { Provider } from 'react-redux'
import { store } from '../redux'

function MyApp({ Component, pageProps }: AppProps) {

  return <Provider store={store}>
    <I18n>
      <Layout menus={MENU_OPTIONS}>
        <Component {...pageProps} />
      </Layout>
    </I18n>
  </Provider>
}

export default MyApp
