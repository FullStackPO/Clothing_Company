import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userScehma = new mongoose.Schema({
    
    email : {
        type : String,
        required : [true, "email is required"],
        unique : true,
        trim : true   
    },
    contact : {
        type : String,
        required : [true, "Contact is required"],
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : [true, "password is required"],
        trim : true
    },
    fullname : {
        type : String,
        required : [true, "fullname is required"],
        trim : true
    },
    role : {
        type : String,
        enum : ["buyer","seller"],
        default : "buyer"
    }

}, { timestamps : true })

userScehma.pre("save", async function(){
    if(!this.isModified("password")) return;

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
})

userScehma.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model("user", userScehma)

export default userModel