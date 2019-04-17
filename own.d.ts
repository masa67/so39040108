import { User } from "./models/user";

declare module Express {
    export interface Session {
        user: User;
        uuid: string;
    }
}