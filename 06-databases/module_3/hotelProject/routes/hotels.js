const router = require("express").Router();
const jsonParser = require("body-parser").json();

const HotelService = require("../services/HotelService");
const db = require("../models");
const hotelService = new HotelService(db);

router.get("/", async function (req, res, next) {
  const hotels = await hotelService.get();
  res.render('hotels', { title: "Hotels", hotels });
});

router.get("/all", async function (req, res, next) {
  const hotels = await hotelService.get();
  res.status(200).send(hotels);
});

router.post("/", jsonParser, async (req, res, nex) => {
  const { Name, Location } = req.body;
  //Validate things
  await hotelService.create(Name, Location);
  res.status(201).end();
});

router.delete("/", jsonParser, async (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  //validate
  await hotelService.delete(id);
  res.status(204).end();
});

module.exports = router;