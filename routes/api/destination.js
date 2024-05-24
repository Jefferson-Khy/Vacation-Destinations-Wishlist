const router = require("express").Router();
const Destination = require("../../models/destination");

router.get("/getAllDestinations", async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.json(destinations);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/addDestination", async (req, res) => {
  try {
    const { destination, location, photo, description } = req.body;
    const newDestination = await Destination.create({
      destination,
      location,
      photo,
      description,
    });
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
