const mongoose= require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "author must have a first name"],
    },
    lastName:{
        type:String,
        required:[true, "author must have a last name"]
    },
    books:{
        type: String,
        required:[true, "author must have a book"]
    }
})

const Author = mongoose.model("author", authorSchema)

module.exports=  Author
