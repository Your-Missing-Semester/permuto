import express from 'express';
import cors from 'cors';

const app = express();
const axios= require("axios");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// TODO T32: sign up
app.post('/signup', (req, res) => {
    res.status(200).send("Signup endpoint under construction.");
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
