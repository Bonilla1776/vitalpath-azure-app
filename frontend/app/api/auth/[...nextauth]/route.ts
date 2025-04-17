import NextAuth from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
import type { NextAuthOptions } from "next-auth";

const tenantName = "vitalpathb2c"; // CHANGE if your tenant name differs
const userFlow = "B2C_1_signup_signin"; // MATCH your Azure B2C user flow name exactly

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADB2CProvider({
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
      tenantId: `${tenantName}.onmicrosoft.com`,
      primaryUserFlow: userFlow,
      authorization: {
        params: {
          scope: "openid profile email offline_access",
        },
      },
      issuer: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${userFlow}/v2.0/`,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, account }) {
      if (account) token.accessToken = account.access_token;
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

