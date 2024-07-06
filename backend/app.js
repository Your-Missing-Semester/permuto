import express from 'express';
import cors from 'cors';
import prisma from './db/db'

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

app.get('/reset-password/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { newPassword } = req.body;

        if (!username) {
            throw new Error("Please log in to reset password");
        };

        const userInfo = await prisma.user.findUnique({
            where: { username: username },
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await prisma.user.update({
            where: { username: username },
            data: { password: hashedPassword },
        });

        res.send("Password Reset Successful.");

    } catch (error) {
    res.status(400).send("Error:", error.message)
    }
});

export default app;
