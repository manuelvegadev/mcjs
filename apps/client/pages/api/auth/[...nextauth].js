import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  theme: {
    colorScheme: 'dark',
    logo: 'https://next-auth.js.org/img/logo/logo-xs.png',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin';
      return token;
    },
  },
};

export default NextAuth(authOptions);
