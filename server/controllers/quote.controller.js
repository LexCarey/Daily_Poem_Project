const quote = require ("./../models/quote.model")//change

// Get all
module.exports.allquote = (req, res)=>{
    quote.find()
        .then(prod=>res.json(prod))
        .catch(err=>res.status(400).json(err))
}

// Get one
module.exports.onequote = (req, res)=>{
    quote.findOne({_id: req.params.id})
        .then(quote => res.json(quote))
        .catch(err=>res.status(400).json(err))
}

// create
module.exports.createquote = (req, res)=>{
    const newquote= req.body
    quote.create(newquote)
        .then(quote=>res.json(quote))
        .catch(err=>res.status(400).json(err))
}

// update
module.exports.updatequote = (req, res)=>{
    quote.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(quote=>res.json(quote))
        .catch(err=>res.status(400).json(err))
}

// delete
module.exports.deletequote = (req, res)=>{
    quote.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}
