import prisma from '../db/db.js';

const checkAuth = async (req, res, next) => {
    console.log("In checkAuth");
    if (req.session.id) {
        const userSession = await prisma.session.findFirst({
            where: { id: req.session.id }, 
        });

        console.log(userSession)
        if (userSession) {
            console.log("Found user session.");
            return next();
        } else {
            console.error("Cannot find user session.");
            return res.status(500).send("Please try again.");
        };
    } else {
        console.error("Unauthorized. Please log in.");
        return res.redirect('/login');
    }
};

export default checkAuth;
