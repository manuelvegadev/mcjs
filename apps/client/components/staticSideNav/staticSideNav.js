import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@carbon/react';
import * as CarbonIcons from '@carbon/icons-react';

export function StaticSideNav({ items }) {
  return (
    <SideNav
      isFixedNav={false}
      expanded={true}
      isChildOfHeader={true}
      aria-label="Side navigation"
      style={{ position: 'relative', top: 0 }}
    >
      <SideNavItems>
        {items.map(({ href, renderIcon, subItems, title }, itemIndex) => {
          if (subItems) {
            return (
              <SideNavMenu
                renderIcon={CarbonIcons[renderIcon]}
                title={title}
                key={itemIndex}
                large={true}
              >
                {subItems.map((subItem, subItemIndex) => {
                  return (
                    <SideNavMenuItem href={subItem.href} key={subItemIndex}>
                      {subItem.title}
                    </SideNavMenuItem>
                  );
                })}
              </SideNavMenu>
            );
          } else {
            return (
              <SideNavLink
                renderIcon={CarbonIcons[renderIcon]}
                href={href}
                key={itemIndex}
              >
                {title}
              </SideNavLink>
            );
          }
        })}
      </SideNavItems>
    </SideNav>
  );
}

export default StaticSideNav;
