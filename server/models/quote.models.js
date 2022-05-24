const mongoose= require("mongoose")

const quoteSchema = new mongoose.Schema({
    quote:{
        type:String,
        required:[true, "quote is required"]
    },
    author:{
        type:String,
        requried:[true, "author is required"]
    },
    book:{
        type:String,
        required:[true, "book is requried"]
    }
})

const Quote = mongoose.model("quote", quoteSchema)

module.exports=  Quote
