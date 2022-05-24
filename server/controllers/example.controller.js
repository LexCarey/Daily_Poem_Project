const { Example } = require('../models/example.model');

//- FIND ALL -
module.exports.findAllExamples = (req, res) => {
    Example.find({})
        .then(allExamples => res.json(allExamples))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//- CREATE -
module.exports.createExample = (req, res) => {
    const { PUT ATTRIBUTES HERE } = req.body;
    Example.create({
        PUT ATTRIBUTES HERE
    })
    .then(example => res.json(example))
    .catch(err => res.status(400).json(err))
}

//- FIND ONE -
module.exports.getExample = (req, res) => {
    Example.findOne({_id:req.params.id})
        .then(example => res.json(example))
        .catch(err => res.json(err))
}

//- UPDATE -
module.exports.updateExample = (req, res) => {
    Example.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedExample => res.json(updatedExample))
        .catch(err => res.status(400).json(err))
}

//- DELETE -
module.exports.deleteExample = (req, res) => {
    Example.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}