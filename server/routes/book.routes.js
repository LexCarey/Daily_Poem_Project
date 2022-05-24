const bookController = require("./../controllers/book.controller")

//after route the modelNameController.<controller function name you made>
//you can makes routes whatever, but follow this format for ease of use
module.exports = (app) => {
    app.get("/api/book", bookController.allbook)
    app.get("/api/book/:id", bookController.onebook)
    app.post("/api/book", bookController.createbook)
    app.put("/api/book/:id", bookController.updatebook)
    app.delete("/api/book/:id", bookController.deletebook)
}
