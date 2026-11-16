import userModel from "../models/users.model.js";
import jwt from "jsonwebtoken"
import config from "../configs/config.js";

const sendTokenResponse = async(user, res, message) => {

    const token = jwt.sign({ id : user._id }, config.JWT_SECRET, { expiresIn : "7d" })

    res.cookie("token", token)

    return res.status(200).json({
        message,
        success : true,
        user : {
            id : user._id,
            email : user.email,
            contact : user.contact,
            password : user.password,
            fullname : user.fullname,
            role : user.role
        }
    })

}

export const registerUserController = async(req, res) => {
    
    const { email, contact, password, fullname, isSeller } = req.body

    try{

        const isExistingUser = await userModel.findOne({ $or : [ {email} , {contact} ]})

        if(isExistingUser){
            return res.status(409).json({
                message : "Email or Contact already resgistered."
            })
        }

        const user = await userModel.create({ email, contact, password, fullname, role : isSeller ? "seller" : "buyer" })

        await sendTokenResponse(user, res, "User registered successfully.")

    }
    
    catch(err){
    
        const error = err

        return res.status(400).json({
            message : error.message
        })

    }

}