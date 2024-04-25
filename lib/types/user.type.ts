export type Role = "ADMIN" | "USER";

export interface userData {
    _id?: any;
    email: string;
    image: string;
    name: string;
    role: Role;
    emailVerified?: boolean | null;
}
