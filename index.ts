
import express from 'express';
import session from 'express-session';
import own from './types/own';

const app = express();
app.get('/', (req, res) => {
    let username = req!.session!.user.login;
});
