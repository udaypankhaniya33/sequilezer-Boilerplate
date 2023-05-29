const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Define your API routes here using the Express Router
// Example:
app.get("/hello", (req, res) => {
  res.send("PickApp");
});

require("./routes/user.public.routes")(app);
require("./routes/user.routes")(app);

const port = 8080
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

exports.api = functions.https.onRequest(app);
