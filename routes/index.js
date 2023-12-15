// Imports the express application.
const express = require("express");
// Creates a new Router obj.
const router = express.Router();
// Provides access to the JSON data.
const { projects } = require("../data.json");

// Creates the route for the Home page.
router.get("/", (req, res) => {
  // Passes all project data to "index" view.
  res.render("index", {projects});
});

// Creates the route for the About page.
router.get("/about", (req, res) => {
  res.render("about");
});

// Creates the route for each project page.
router.get("/project/:id", (req, res) => {
  // Obtains the ID from the project route.
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    // Passes the project data to the "project" view.
    res.render("project", {project})
  } else {
    res.sendStatus(404);
    console.log("This route does not exist!");
  }
});

// Exports the router.
module.exports =  router;