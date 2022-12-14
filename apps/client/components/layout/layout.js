import { Column, Content, Grid, HeaderContainer } from '@carbon/react';
import { Header } from '../header';
import { Footer } from '../footer';

export function Layout({ children }) {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header {...{ isSideNavExpanded, onClickSideNavExpand }} />
          <Content>
            <Grid>
              <Column sm={4} md={8} lg={16}>
                {children}
              </Column>
            </Grid>
          </Content>
          <Footer />
        </>
      )}
    />
  );
}

export default Layout;
