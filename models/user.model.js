const mn = require("mongoose")

//defining user schema
const userSchema = new mn.Schema({
    name : {
        type : String,
        required : true   
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        minLength : 11
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }
},{
    timestamps : true,
    versionKey : false
})

module.exports = mn.model("User", userSchema)