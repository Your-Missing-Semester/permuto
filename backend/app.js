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

});

// TODO T32: log in 
app.post('/login', (req, res) => {

});

// TODO T32: profile 
app.post('/profile', (req, res) => {

});

export default app;
