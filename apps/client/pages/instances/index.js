import { Layout } from '../../components';
import { ClickableTile } from '@carbon/react/lib/components/Tile/next/Tile';
import { Column, Grid, Heading } from '@carbon/react';
import { Console, Download_01 } from '@carbon/pictograms-react';
import { useRouter } from 'next/router';

export function InstancesIndex() {
  const router = useRouter();

  return (
    <Layout>
      <Grid>
        <Column sm={2} lg={4}>
          <ClickableTile
            style={{ display: 'Flex', gap: '1rem', height: '100%' }}
            href={'/instances/demo'}
            onClick={(event) => {
              event.preventDefault();
              return router.push('/instances/demo');
            }}
          >
            <Console />
            <Heading>1.19</Heading>
          </ClickableTile>
        </Column>

        <Column sm={2} lg={4}>
          <ClickableTile
            style={{ display: 'Flex', gap: '1rem', height: '100%' }}
            href={'/instances/new'}
            onClick={(event) => {
              event.preventDefault();
              return router.push('/instances/new');
            }}
          >
            <Download_01 />
            <Heading>Descargar Instancia</Heading>
          </ClickableTile>
        </Column>
      </Grid>
    </Layout>
  );
}

export default InstancesIndex;
