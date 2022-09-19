import { Auth } from '@supabase/ui';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';
import { Heading } from '@carbon/react';

export function Login() {
  const router = useRouter();

  supabaseClient.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') await router.push('/');
  });

  return (
    <div
      style={{ display: 'grid', placeContent: 'center', minHeight: '100vh' }}
    >
      <Heading>Login to MCJS Control Panel</Heading>
      <Auth supabaseClient={supabaseClient} magicLink={true} />
    </div>
  );
}

export default Login;
