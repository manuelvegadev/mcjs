import Header                     from './header';
import {Content, HeaderContainer} from '@carbon/react';
import Footer                     from './footer';

export default function Layout({children}) {
    return (<>
        <HeaderContainer
            render={({isSideNavExpanded, onClickSideNavExpand}) => (<>
                <Header {...{isSideNavExpanded, onClickSideNavExpand}}/>
                <Content>
                    {children}
                </Content>
                <Footer/>
            </>)}
        />
    </>);
}