import prisma from '../db/db.js';

const checkAuth = async (req, res, next) => {
    if (req.session.userId) {
        const userIdVerify = await prisma.session.findFirst({
            where: { userId: req.session.userId }, 
        });
        if (userIdVerify) {
            return next();
        } else {
            console.error("Cannot find user.");
            return res.status(500).send("Please try again.");
        };
    } else {
        console.error("Unauthorized. Please sign up or log in.");
        return res.redirect('/login');
    }
};

export default checkAuth;
