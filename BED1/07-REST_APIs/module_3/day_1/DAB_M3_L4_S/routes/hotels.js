var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var createError = require("http-errors");

var HotelService = require("../services/HotelService")
var db = require("../models");
var hotelService = new HotelService(db);
/* GET hotels listing. */
router.get('/', async function (req, res, next) {
  // #swagger.tags = ["Hotels"]
  // #swagger.description = "Gets the list of all available hotels."
  // #swagger.produces = ["text/html"]
  const hotels = await hotelService.get();
  res.status(200).render('hotels', { hotels: hotels });
});

router.get('/:hotelId', async function (req, res, next) {
  const hotel = await hotelService.getHotelDetails(req.params.hotelId);
  res.render('hotelDetails', { hotel: hotel });
});

router.post('/:hotelId/rate', jsonParser, async function (req, res, next) {
  let value = req.body.Value;
  let userId = req.body.UserId;
  await hotelService.makeARate(userId, req.params.hotelId, value);
  res.end()
});

router.post('/', jsonParser, async function (req, res, next) {
  // #swagger.tags = ["Hotels"]
  // #swagger.description = "Creates a new hotel."
  /* #swagger.parameters['body'] =  {
  "name": "body",
  "in": "body",
    "schema": {
      $ref: "#/definitions/Hotel"
    }
  }
*/

  let Name = req.body.Name;
  let Location = req.body.Location;
  if (Name == null || Location == null) {
    next(createError(400, "Both Name and Location need to be provided in the request"));
  }
  await hotelService.create(Name, Location);
  res.status(201).end()
});

router.delete('/', jsonParser, async function (req, res, next) {
  let id = req.body.id;
  await hotelService.deleteHotel(id);
  res.end()
});

router.delete('/:id', jsonParser, async function (req, res, next) {
  await hotelService.deleteHotel(req.params.id);
  res.end()
});

module.exports = router;
