//Category Model
const mn = require("mongoose")

const categorySchema = new mn.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    }
},{
    timestamps : true,
    versionKey : false
})

module.exports = mn.model("Category", categorySchema)