import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import {
  Header as CarbonHeader,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
  SkipToContent,
} from '@carbon/react';
import { Logout, Terminal } from '@carbon/icons-react';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header(props) {
  // [<path>, <title>]
  const navItems = [
    // ['/client', 'Client'],
    // ['/server', 'Server'],
    // ['/protected', 'Protected'],
    // ['/api-example', 'API'],
    // ['/admin', 'Admin'],
    // ['/me', 'Me']
    ['/instances', 'Instances'],
    ['/io', 'io'],
  ];

  const router = useRouter();

  return (
    <CarbonHeader aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={props.onClickSideNavExpand}
        isActive={props.isSideNavExpanded}
      />
      <HeaderName
        href="/"
        onClick={(event) => {
          event.preventDefault();
          return router.push('/');
        }}
        prefix="💻"
      >
        MCJS
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        {navItems.map(([path, title], index) => (
          <HeaderMenuItem
            href={path}
            key={index}
            onClick={(event) => {
              event.preventDefault();
              return router.push(path);
            }}
            isCurrentPage={router.route === path}
          >
            {title}
          </HeaderMenuItem>
        ))}
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Terminal" onClick={() => {}}>
          <Terminal size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Logout"
          onClick={signOut}
          tooltipAlignment="end"
        >
          <Logout size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav
        aria-label="Side navigation"
        expanded={props.isSideNavExpanded}
        isPersistent={false}
      >
        <SideNavItems>
          {navItems.map(([path, title], index) => (
            <SideNavMenuItem
              href={path}
              key={index}
              isActive={router.route === path}
              onClick={(event) => {
                event.preventDefault();
                return router.push(path);
              }}
            >
              {title}
            </SideNavMenuItem>
          ))}
        </SideNavItems>
      </SideNav>
    </CarbonHeader>
  );
}
