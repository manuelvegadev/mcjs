import { Layout } from '../../components';
import {
  Button,
  Dropdown,
  Form,
  Heading,
  Stack,
  TextInput,
} from '@carbon/react';
import PaperApi from '../../services/paper-api';
import { useId, useState } from 'react';

export function New({ versions }) {
  const baseId = useId();

  const orderedVersions = [...versions].reverse();
  orderedVersions[0] = 'Latest (' + orderedVersions[0] + ')';

  const [versionSelected, setVersionSelected] = useState(orderedVersions[0]);

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <Layout>
      <Form style={{ maxWidth: '400px' }} onSubmit={submitHandler}>
        <Stack gap={7}>
          <Heading>Create a new instance</Heading>

          <TextInput
            id={baseId + 'instance_name'}
            labelText={'Instance name'}
            placeholder={'(Generated name)'}
          />

          <Dropdown
            id={baseId + 'instance_version'}
            titleText="Minecraft version"
            label="Minecraft version"
            items={orderedVersions}
            itemToString={(item) => (item ? item : '')}
            selectedItem={versionSelected}
            onChange={({ selectedItem }) => setVersionSelected(selectedItem)}
          />

          <Button type={'submit'}>Create instance</Button>
        </Stack>
      </Form>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const paper = new PaperApi();
  const versions = await paper.getVersions();

  return {
    props: {
      versions,
    },
  };
}

export default New;
