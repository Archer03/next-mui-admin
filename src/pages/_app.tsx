import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../web-core/layout'
import MENU_OPTIONS from './MENU_OPTIONS'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout menus={MENU_OPTIONS}>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
