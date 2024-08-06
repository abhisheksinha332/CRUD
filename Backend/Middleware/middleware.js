import jwt from 'jsonwebtoken'
import User from '../models/user.js'


export const requireAuth = async(req,res,next) => {
    console.log("in Middleware")

    try {
        const token = req.cookies.Authorization

        const decoded = jwt.verify(token, process.env.SECRET)

        if(Date.now() > decoded.exp){
            return res.status(401).json({ message: 'Token expired' });
        }

        const user = await User.findById(decoded.sub)

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    req.user = user
    next()

    } catch (error) {
        return res.status(401).json({ message: 'Not Authorized' });   
    }
    
}