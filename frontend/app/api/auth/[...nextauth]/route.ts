import NextAuth from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

const handler = NextAuth({
  providers: [
    AzureADB2CProvider({
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_B2C_TENANT_ID!,
      primaryUserFlow: "B2C_1_signup_signin",
      authorization: {
        params: {
          scope: "openid profile offline_access",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) token.accessToken = account.access_token;
      return token;
    },
  },
  
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };


