import { AppProps } from 'next/app'
import { Header } from '../components/Header/Index'

// AUTENTICAÇÃO
import { SessionProvider } from 'next-auth/react'

// ESTILOS
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header></Header>
      <Component {...pageProps} />
    </SessionProvider>
    )
}

export default MyApp
