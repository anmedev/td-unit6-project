// Imports the express application.
const express = require("express");
// Creates a new Router obj.
const router = express.Router();
// Provides access to the JSON data.
const { projects } = require("../data.json");

// Creates the route for the Home page.
router.get("/", (req, res) => {
  res.render("index", {projects});
});

// Creates the route for the About page.
router.get("/about", (req, res) => {
  res.render("about");
});

// Creates the route for each project page.
router.get("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  res.render("project", {project});
});

// Imports the router.
module.exports =  router;