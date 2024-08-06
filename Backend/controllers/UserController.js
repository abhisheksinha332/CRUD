import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from "../models/user.js";

export const signup = async(req,res) => {

    try {
        
        const password = req.body.password
        const hashedPassword = bcrypt.hashSync(password, 8)
        let userDetails = new User({
            email : req.body.email,
            password : hashedPassword
        })

        await userDetails.save();
        res.status(201).json(userDetails);

    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

export const login = async(req,res) => {

    try {
        const {email, password} = req.body

    const user = await User.findOne({email})

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }


    const PasswordMatch = bcrypt.compareSync(password, user.password)

    if (!PasswordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30
    const token = jwt.sign({sub: user._id, exp: exp}, process.env.SECRET)

    res.json(token)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

export const logout = (req, res) => {

}