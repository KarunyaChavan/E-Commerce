/**
 * Controller for creating category
 * POST localhost:8888/ecomm/api/v1/categories
 * {
 *  name : "Household",
 *  description : "This will have all household items"
 * }
 */
const catModel = require("..\\models\\category.model.js")

exports.createNewCategory = async (req,res)=>{
    //Read the req body
    
    //Create the category object
    const catData = {
        name : req.body.name,
        description : req.body.description
    }

    try{
    //Insert into MongoDB
        const category = await catModel.create(catData)
        return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category : ",err)
        return res.status(500).send({
            message : "Error while creating the category"
        })
    }

    //Return the response of the created category
}