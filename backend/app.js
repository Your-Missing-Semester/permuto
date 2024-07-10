import express from 'express';
import cors from 'cors';
import prisma from './db/db.js'
import bcrypt from 'bcrypt'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if (password !== confirmPassword) {
        return res.send('Passwords do not match!');
    }

    res.send('Received POST request')
});

app.post('/changeUsername', (req, res) => {
    const newUsername = req.body.newUsername
    res.send('Changed your username to: ' + newUsername);
})

// TODO T32: log in 
app.post('/login', (req, res) => {
    res.status(200).send("Login endpoint under construction.");
});

// TODO T32: profile 
app.post('/profile', (req, res) => {
    res.status(200).send("Profile endpoint under construction.");
});

// eventually read off session instead of userId in params
app.put('/reset-password/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { newPassword } = req.body;

        if (userId == ':userId') {
            console.log("Empty userId param.");
            return res.status(400).send("Please log in first.");
        };

        const userInfo = await prisma.user.findUnique({
            where: { id: userId },
        });
        
        if (!userInfo) {
            console.log("No user found.");
            return res.status(500).send("Cannot find existing user.");
        };

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        res.send("Password Reset Successful.");

    } catch (error) {
        console.error("Error resetting password", error);
        res.status(500).send("Error resetting password, try again.");
    }
});

export default app;
