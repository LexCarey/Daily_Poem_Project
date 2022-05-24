const book = require ("./../models/book.model")//change

// Get all
module.exports.allbook = (req, res)=>{
    book.find()
        .then(prod=>res.json(prod))
        .catch(err=>res.status(400).json(err))
}

// Get one
module.exports.onebook = (req, res)=>{
    book.findOne({_id: req.params.id})
        .then(book => res.json(book))
        .catch(err=>res.status(400).json(err))
}

// create
module.exports.createbook = (req, res)=>{
    const newbook= req.body
    book.create(newbook)
        .then(book=>res.json(book))
        .catch(err=>res.status(400).json(err))
}

// update
module.exports.updatebook = (req, res)=>{
    book.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(book=>res.json(book))
        .catch(err=>res.status(400).json(err))
}

// delete
module.exports.deletebook = (req, res)=>{
    book.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}
