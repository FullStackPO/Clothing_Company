import userModel from "../models/users.model.js";


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

        return res.status(201).json({
            message : "User Registered Successfully",
            user : user
        })

    }
    
    catch(err){
    
        const error = err

        return res.status(400).json({
            message : error.message
        })

    }

}