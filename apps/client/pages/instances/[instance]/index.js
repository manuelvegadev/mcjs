import {
  Layout,
  StaticSideNav,
  StaticSideNavContent,
} from '../../../components';

export function instanceIndex() {
  const sideNavItems = [
    {
      title: 'Status',
      href: '/instances/demo/mods',
      renderIcon: 'CloudMonitoring',
    },
    {
      title: 'Mods',
      href: '/instances/demo/mods',
      renderIcon: 'ModelAlt',
    },
    {
      title: 'Resource Packs',
      href: '/instances/demo/resource-packs',
      renderIcon: 'Application',
    },
    {
      title: 'Shader Packs',
      href: '/instances/demo/shader-packs',
      renderIcon: 'Image',
    },
    {
      title: 'Worlds',
      href: '/instances/demo/worlds',
      renderIcon: 'Earth',
    },
    {
      title: 'Settings',
      href: '/instances/demo/settings',
      renderIcon: 'Settings',
    },
  ];

  return (
    <Layout>
      <StaticSideNav items={sideNavItems} />

      <StaticSideNavContent></StaticSideNavContent>
    </Layout>
  );
}

export default instanceIndex;
