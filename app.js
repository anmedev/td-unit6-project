/* Treehouse FSJS Techdegree
FSJS Project 6 - Static Node.js and Express Site
*/

// Imports Express.
const express = require("express")
const app = express();

// Sets the Pug template as the template engine to use.
app.set("view engine", "pug");

// Serves the static files in the public folder.
app.use(express.static("public"));

// Turns on the Express server.
app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});