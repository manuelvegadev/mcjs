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
        {items.map((item, itemIndex) => {
          if (item.subItems) {
            return (
              <SideNavMenu
                renderIcon={CarbonIcons[item.renderIcon]}
                title={item.title}
                key={itemIndex}
                large={true}
              >
                {item.subItems.map((subItem, subItemIndex) => {
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
                renderIcon={CarbonIcons[item.renderIcon]}
                href={item.href}
                key={itemIndex}
              >
                {item.title}
              </SideNavLink>
            );
          }
        })}
      </SideNavItems>
    </SideNav>
  );
}

export default StaticSideNav;
