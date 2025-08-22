const router = require("express").Router();
const jsonParser = require("body-parser").json();

const RoomService = require("../services/RoomService");
const db = require("../models");
const roomService = new RoomService(db);

router.get("/", async function (req, res, next) {
  const rooms = await roomService.get();
  res.render('rooms', { rooms });
});

router.get("/:hotelId", async function (req, res, next) {
  const rooms = await roomService.getHotelRooms(req.params.hotelId);
  console.log(rooms);
  console.log(rooms.Users);
  res.render("rooms", { rooms });
});

router.post("/", jsonParser, async (req, res, nex) => {
  const { Capacity, PricePerDay, HotelId } = req.body;
  //Validate things
  await roomService.create(Capacity, PricePerDay, HotelId);
  res.status(201).end();
});

router.post("/reservation", jsonParser, async (req, res, next) => {
  const { userId, roomId, startDate, endDate } = req.body;
  //valdated OK!
  await roomService.rentARoom(userId, roomId, startDate, endDate);
  res.end();
})

router.delete("/", jsonParser, async (req, res, next) => {
  const id = req.body.id;
  //validate
  await roomService.delete(id);
  //if not do something else
  res.status(204).end();
});

module.exports = router;