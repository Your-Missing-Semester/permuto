import express from 'express';
import cors from 'cors';
import prisma from './db/db.js'
import bcrypt from 'bcrypt'
import 'dotenv/config';
import session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import checkAuth from './middleware/checkAuth.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,  //ms -> 7 days
    },
    store: new PrismaSessionStore(
        prisma, {
            checkPeriod: 60 * 1000, //ms -> 60 seconds
            }
        )
}));

app.use((req, res, next) => {
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

app.post('/changeUsername', checkAuth, (req, res) => {
    const newUsername = req.body.newUsername
    res.send('Changed your username to: ' + newUsername);
})

// TODO T32: profile 
app.post('/profile', checkAuth, (req, res) => {
    res.status(200).send("Profile endpoint under construction.");
});

// T57: Profile View - Create GET route to return a specific user profile and their skills
app.get('/profile/:userid', async (req, res) => {
    try{
        const {userid} = req.params
        
        const userProfile = await prisma.profile.findUnique({
            where: {
                id: userid,
            },
            include: {
                profile: {
                    include: {
                        skills: true,
                    },
                }
            },
        });

        if(!userProfile){
            return res.status(404).json({ message: 'Profile not found.' });
        }

        res.status(200).json({ profile: userProfile });
    } catch (error) {
        console.error("Error fetching user profile and their skills: ", error)
        
        if (error instanceof prisma.PrismaClientKnownRequestError) {
            console.error('Prisma Known Request Error:', error.message);
            return res.status(400).json({ message: 'Database error occurred.' });
            }
        else if (error instanceof prisma.PrismaClientUnknownRequestError) {
            console.error('Prisma Unknown Request Error:', error.message);
        }
        else {
            console.error('Unexpected Error:', error.message);
            return res.status(500).json({ message: 'An unexpected error occurred while fetching the profile.' });
        }
    }
});

// eventually read off session instead of userId in params
app.patch('/reset-password/:userId', checkAuth, async (req, res) => {
    try {
        const { userId } = req.params;
        const { newPassword } = req.body;

        if (userId == ':userId') {
            console.error("Empty userId param.");
            return res.status(400).send("Please log in first.");
        };

        if (!newPassword) {
            console.error("Empty password param.");
            return res.status(400).send("Please enter a valid password.");
        };

        const userInfo = await prisma.user.findUnique({
            where: { id: userId },
        });
        
        if (!userInfo) {
            console.error("No user found.");
            return res.status(500).send("Cannot find existing user.");
        };

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        res.status(200).json({
            message: "Password Reset Successful.",
            success: true
        });

    } catch (error) {
        console.error("Error resetting password", error);
        res.status(500).send("Error resetting password, try again.");
    }
});

export default app;
