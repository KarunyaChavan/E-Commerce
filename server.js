//Starting file of the project 
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const serverConfig = require(".\\configs\\server.config.js")
const db_config = require(".\\configs\\db.config.js") 
const user_model = require(".\\models\\user.model.js")
const bcrypt = require("bcryptjs")

app.use(express.json()) //Middleware - Reads JSON as JS object
//Create an ADMIN user at the starting of app
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error", ()=>{
    console.log("Error while connecting to database")
})

db.once("open",()=>{
    console.log("Connected to MongoDB")
    init()
})

async function init(){
    try{
        let user = await user_model.findOne({userId : "admin"})
        if(user){
            console.log("Admin is already present")
            return
        }
    }catch(err){
        console.log("Error while reading data : ",err)
    }
    
    try{
        user = await user_model.create({
            name : "Karunya Chavan",
            userId : "admin",
            email : "karunyachavan@icloud.com",
            userType : "ADMIN",
            password : bcrypt.hashSync("Mavrix84",8)
        })
        console.log("Admin Created ",user)
    }catch(err){
        console.log(err)
    }
}

//Stich the ROUTE to the SERVER
require(".\\routes\\auth.route.js")(app)//Passing app object to route
require(".\\routes\\categories.routes.js")(app)

//Starting the server
app.listen(serverConfig.PORT, ()=>{
    console.log("Server established at port : ", serverConfig.PORT)
})