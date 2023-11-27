const express = require("express");
const app = express();
app.use(express.json());
const cars = ["Ford Explorer",
    "Toyota Highlander" ,
    "Honda Pilot",
    "Chevrolet Traverse",
    "Nissan Pathfinder",
    "Volkswagen Atlas",
    "Subaru Ascent",
    "Hyundai Palisade",
    "Kia Telluride",
    "Mazda CX-9",
    "Dodge Durango",
    "GMC Acadia",
    "Buick Enclave",
    "Ford Expedition",
    "Chevrolet Tahoe",
    "Nissan Armada",
    "Toyota Sequoia",
    "Chevrolet Suburban"];

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/search", function (req, res) {
  res.send("API Search");
});


app.get("/api/cars", function (req, res) {
  res.send(cars);
});
//get one resource
app.get("/api/cars/:index", function (req, res) {
  if (!cars[req.params.index])
    return res.status(400).send("Car not found");
  res.send(cars[req.params.index]);
});
//update one resource with id e.g. index
app.put("/api/cars/:index", function (req, res) {
  //   console.log(req.body);
  cars[req.params.index] = req.body.name;
  res.send(cars[req.params.index]);
});
//delete one resource
app.delete("/api/cars/:index", function (req, res) {
    cars.splice(req.params.index, 1);
  res.send(cars);
});
//create one resource
app.post("/api/cars", function (req, res) {
    cars.push(req.body.name);
  res.send(cars);
});

app.listen(8080);