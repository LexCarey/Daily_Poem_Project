const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    PUT ATTRIBUTES HERE: {
        type: String,
        required: [
            true,
            'Atrribute is required'
        ],
        minlength: [
            3,
            'Name must be more than 3 characters.'
        ]
    }
}, { timestamps: true })

module.exports.Example = mongoose.model('Example', ExampleSchema);