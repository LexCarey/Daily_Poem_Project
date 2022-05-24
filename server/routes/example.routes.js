const ExampleController = require('../controllers/example.controller');

module.exports = function(app){
    app.get('/api/examples', ExampleController.findAllExamples)
    app.get('/api/examples/:id', ExampleController.getExample)
    app.post('/api/examples', ExampleController.createExample)
    app.put('/api/examples/:id', ExampleController.updateExample)
    app.delete('/api/examples/:id', ExampleController.deleteExample)
}