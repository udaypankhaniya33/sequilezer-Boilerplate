const express = require("express");
const cors = require("cors");

const app = express();

const bodyParser = require('body-parser');
// app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index.js");


// set alter :true when sync model with database   
db.sequelize.sync({alter: false})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Uday 's Empier." });
});

require("./app/routes/user.public.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});