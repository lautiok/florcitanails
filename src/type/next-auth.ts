import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      dni: string;
      role: string;
    };
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  role: string;
}

export type Session = DefaultSession & {
  user: User;
};
