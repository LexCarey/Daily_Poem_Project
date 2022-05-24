const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
require("./configs/mongoose.config")
app.use(express.urlencoded({ extended: true }));
const port = 8000;

// CHANGE TO ACTUAL ROUTES
require('./routes/example.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );