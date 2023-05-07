import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
import { AuthApi } from "../../../services/AuthApi";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "login",
        }
      }
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
],
secret: process.env.JWT_SECRET,

callbacks: {
    async jwt(data) {
      // Persist the OAuth access_token to the token right after signin

      const { token, user, account } = data

      if (account) {
        const authToken = account.id_token

        token.id_token = authToken

      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      const authToken = token.id_token
      session.auth_token = authToken;

      return session;
    },
    
    async redirect({ url, baseUrl}) {
        if (url.startsWith("/")) return `${baseUrl}`
        return baseUrl
    }
    
  },
}

export default NextAuth(authOptions);
