import express from 'express';
import cors from 'cors';
import prisma from './db/db'
import bcrypt from 'bcrypt'

const app = express();

const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,  //ms -> 7 days
    },
    store: new PrismaSessionStore(new PrismaClient(), {
        checkPeriod: 60 * 1000, //ms -> 60 seconds
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
    })
}));

app.use((req, res, next) => {
    console.log(PrismaSessionStore);
    console.log(`${req.method}:${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/signup', async (req, res) => {
    const {email, username, password, confirmPassword} = req.body

    if (password !== confirmPassword) {
        return res.send('Passwords do not match!');
    }
    
    const existingUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if(existingUser){
        return res.status(400).send('User already exists.')
    }

    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    const newUser = await prisma.user.create({
        data: {
            email: email,
            username: username,
            password: hashedPassword
        }
    })

    res.send('New user registered!')
});

// TODO T32: log in 
app.post('/login', (req, res) => {
    res.status(200).send("Login endpoint under construction.");
});

app.use(async (req, res, next) => {
    if (req.session.sid) {
        const user = await prisma.session.findUnique({
            where: {
                sid: req.session.sid
            }
        });
        if (user) {
            req.user = user;
            next();
        } 
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.post('/changeUsername', (req, res) => {
    const newUsername = req.body.newUsername
    res.send('Changed your username to: ' + newUsername);
})

// TODO T32: profile 
app.post('/profile', (req, res) => {
    res.status(200).send("Profile endpoint under construction.");
});

export default app;
