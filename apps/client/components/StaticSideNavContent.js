import { Column, Grid } from '@carbon/react';

export function StaticSideNavContent({ children }) {
  return (
    <Grid>
      <Column lg={{ span: 13, offset: 3 }}>{children}</Column>
    </Grid>
  );
}

export default StaticSideNavContent;
