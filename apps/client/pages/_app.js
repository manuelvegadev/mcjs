import { SessionProvider } from 'next-auth/react';
import './styles.scss';
import { WSContextProvider } from '../contexts/websocket';

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <WSContextProvider>
        <Component {...pageProps} />
      </WSContextProvider>
    </SessionProvider>
  );
}

export default App;
