import packageJSON from '../../../../package.json';
import { Column, Grid } from '@carbon/react';

export function Footer() {
  return (
    <Grid>
      <Column sm={4} md={8} lg={16}>
        <footer>v{packageJSON.version}</footer>
      </Column>
    </Grid>
  );
}

export default Footer;
