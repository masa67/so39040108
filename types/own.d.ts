import express = require('express');
import { User } from "../models/user";

declare global {
    namespace Express {
        interface Session {
            user: User;
            uuid: string;
        }
    }
}
