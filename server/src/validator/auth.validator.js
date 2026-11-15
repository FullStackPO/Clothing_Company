import { body, validationResult } from "express-validator"


const validationRequest = ( req, res, next ) => {

    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(400).json({errors : error.array()})
    }

    next();

}

export const registerValidation = [

    body("email").notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid format"),

    body("contact").notEmpty().withMessage("Contact is required.")
    .matches(/^\d{10}$/).withMessage("Contact must be of 10 digits"),

    body("password").notEmpty().withMessage("Password is required")
    .isLength({min : 6}).withMessage("Min length of password must be 6"),

    body("fullname").notEmpty().withMessage("Full Name is required")
    .isLength({min : 3}).withMessage("Full Name must be of minimum 3"),

    body("isSeller").isBoolean().withMessage("isSeller must be boolean value"),

    validationRequest

]