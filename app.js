/* Treehouse FSJS Techdegree
FSJS Project 6 - Static Node.js and Express Site
*/

// Imports Express.
const express = require("express")
const app = express();

// Serves the static files in the public folder.
app.use("/static", express.static("public"));

// Sets the Pug template as the template engine to use.
app.set("view engine", "pug");

// Connects routes.
const mainRoutes = require("./routes");
app.use(mainRoutes);

// Creates a 404 Error handler.
app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = "Oh no! This page does not exist!"
  console.log(`${err.status} : ${err.message}`);
  next(err);
});

// Creates a global Error handler.
// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMsg = err.message || "Internal Sever Error"
//   console.log(`${errorMsg} : ${errorMsg}`);
// })


// Turns on the Express server.
app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});

module.exports = app;