const mongoose= require("mongoose")

const authorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"author must have a name"]
    },
    books:[{
        type: String,
        required:[true, "author must have a book"]
    }],
    about:{
        type:String,
        required:[true, "author must have an about"]
    },
    image:{
        type:String,
        required:[true, "author must have an image"]
    }
})

const Author = mongoose.model("author", authorSchema)

module.exports=  Author
