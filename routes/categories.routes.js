/**Route for 
 * POST localhost:8888/ecomm/api/v1/categories
 * */
categoryController = require("..\\controllers\\category.controller.js")
authMW = require("..\\middlewares\\auth.mw.js")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories",[authMW.verifyToken, authMW.isAdmin],categoryController.createNewCategory)
}