import { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
};
