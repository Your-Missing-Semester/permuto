const checkAuth = async (req, res, next) => {
    console.log("SID", req.session.sid);
    if (req.session.sid) {
        const userSession = await prisma.session.findFirst({
            where: { sid: req.session.sid }, 
        });

        if (userSession) {
            console.log("Found user session.");
            res.status(200).json({
                message: "Success",
                success: true
            });
            return next();
        } else {
            console.error("Cannot find user session.");
            return res.status(500).send("Please log in..");
        };
    } else {
        console.error("Unauthorized. Please log in.");
        return res.redirect('/login');
    }
};

export default checkAuth;
