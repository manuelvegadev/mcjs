import Link from 'next/link';
import styles from './footer.module.scss';
import packageJSON from '../../../package.json';
import { Column, Grid } from '@carbon/react';

export default function Footer() {
  return (
    <Grid>
      <Column sm={4} md={8} lg={16}>
        <footer>
          <hr />
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <a href="https://next-auth.js.org">Documentation</a>
            </li>
            <li className={styles.navItem}>
              <a href="https://www.npmjs.com/package/next-auth">NPM</a>
            </li>
            <li className={styles.navItem}>
              <a href="https://github.com/nextauthjs/next-auth-example">
                GitHub
              </a>
            </li>
            <li className={styles.navItem}>
              <Link href="/policy">
                <a>Policy</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <em>next-auth@{packageJSON.dependencies['next-auth']}</em>
            </li>
          </ul>
        </footer>
      </Column>
    </Grid>
  );
}
