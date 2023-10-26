/* Treehouse FSJS Techdegree
FSJS Project 6 - Static Node.js and Express Site
*/

// Imports Express.
const app = require("express")();
// const data = require();

// Sets the Pug template as the template engine to use.
app.set("view engine", "pug");

// Turns on Express server.
app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});