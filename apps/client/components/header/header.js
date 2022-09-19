import { useRouter } from 'next/router';
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
import { Logout } from '@carbon/icons-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

export function Header({ isSideNavExpanded, onClickSideNavExpand }) {
  // [<path>, <title>]
  const navItems = [
    ['/instances', 'Instances'],
    ['/io', 'io'],
  ];

  const router = useRouter();

  async function logOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) return console.error('Error logging out:', error.message);
    await router.push('/');
  }

  return (
    <CarbonHeader aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
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
        <HeaderGlobalAction
          aria-label="Logout"
          onClick={logOut}
          tooltipAlignment="end"
        >
          <Logout size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
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

export default Header;
