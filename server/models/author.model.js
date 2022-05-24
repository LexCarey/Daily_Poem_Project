const mongoose= require("mongoose")

const authorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"author must have a name"]
    },
    books:{
        type: String,
        required:[true, "author must have a book"]
    }
})

const Author = mongoose.model("author", authorSchema)

module.exports=  Author
