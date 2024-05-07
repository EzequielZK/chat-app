import LoginAction from '@/views/login/actions/login';
import { LoginBody } from '@/views/login/types';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {},
      async authorize(credentials) {
        const body = credentials as LoginBody;

        const response = await LoginAction({
          email: body.email,
          password: body.password,
        });
        if (response.ok) {
          return response.data;
        }

        return null;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({token, trigger, user}){
  //     const parsedToken = token as any;
  //     if(trigger === "update"){
  //       const response = await
  //     }
  //   }
  // }
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
