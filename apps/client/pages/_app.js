import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import './_app.scss';
import { WSContextProvider } from '../contexts/websocket';

export function App({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <WSContextProvider>
        <Component {...pageProps} />
      </WSContextProvider>
    </UserProvider>
  );
}

export default App;
