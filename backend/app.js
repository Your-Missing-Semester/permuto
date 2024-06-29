import express from 'express';
import cors from 'cors';
import prisma from './db/db'

const app = express();
const axios= require("axios");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if (password !== passwordConfirm) {
        return res.send('Passwords do not match!');
    }

    res.send('Received POST request')
});

// TODO T32: log in 
app.post('/login', (req, res) => {
    res.status(200).send("Login endpoint under construction.");
});

// TODO T32: profile 
app.post('/profile', (req, res) => {
    res.status(200).send("Profile endpoint under construction.");
});

export default app;
