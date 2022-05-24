const mongoose= require("mongoose")

const bookSchema = new mongoose.Schema({
    id:{type:String
    },
    title:{
        type: String,
        required: [true, "title is required"],
        minlength: [2, "Title must be more than 1 character"]
    },
    price:{
        type: Number,
        required:[true, "price is required"]
    },
    description:{
        type: String,
        required: [true, "description is required"],
        minlength:[10, "description must be at least 10 characters"]
    },
    author:{
        type: String
    },
    cover_art:{
        type: String,
    }
})

const Book = mongoose.model("book", bookSchema)

module.exports=  Book
