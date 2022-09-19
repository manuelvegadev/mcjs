import { Layout } from '../components';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { Heading } from '@carbon/react';

export default function IndexPage() {
  return (
    <Layout>
      <Heading>MCJS!</Heading>
    </Layout>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' });
