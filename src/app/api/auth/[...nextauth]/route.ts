import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

// NextAuth handler to handle the authentication flow
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
