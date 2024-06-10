/**
 * POST localhost:8888/ecomm/api/v1/auth/signup
 * We need to intercept this
 */
const authController = require("..\\controllers\\auth.controller.js") //.. implies that we are moving one path back
const authMW = require("..\\middlewares\\auth.mw.js")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup", [authMW.verifySignUpBody],authController.signup)

    //Route for POST localhost:8888/ecomm/api/v1/auth/signin
    app.post("/ecomm/api/v1/auth/signin",[authMW.verifySignInBody],authController.signin)
}