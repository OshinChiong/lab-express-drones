const express = require('express');
const router = express.Router();
// require the Drone model here
const Drone = require("../models/Drone.model")

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(function (allDrones) {
    console.log("Found drone", allDrones);
    res.render("drones/list", { allDrones: allDrones });
  })
  .catch(function (err) {
    console.log("Something went wrong", err.message);
  });
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  })
    .then(function (createdDrone) {
      res.redirect("/drones/list");
    })
    .catch(function (error) {
      res.redirect("/");
    });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
