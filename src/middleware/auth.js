import jwt from "jsonwebtoken"

export const auth = (req,res)=> {
    const token = req.headers.autorization;

    if(!token){
        return res.status(401).json({message: "bad auth"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message: "bad auth"})
        };

        return next();
    });
};