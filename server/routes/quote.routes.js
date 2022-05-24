const quoteController = require("./../controllers/quote.controller")

//after route the modelNameController.<controller function name you made>
//you can makes routes whatever, but follow this format for ease of use
module.exports = (app) => {
    app.get("/api/quote", quoteController.allquote)
    app.get("/api/quote/:id", quoteController.onequote)
    app.post("/api/quote", quoteController.createquote)
    app.put("/api/quote/:id", quoteController.updatequote)
    app.delete("/api/quote/:id", quoteController.deletequote)
}
