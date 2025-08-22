const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class RoomService {
  constructor(db) {
    this.client = db.sequelize;
    this.Room = db.Room;
    this.Reservations = db.Reservations;
  }

  async create(capacity, pricePerDay, hotelId) {
    sequelize.query('INSERT INTO Rooms (Capacity, PricePerDay, HotelId) VALUES (:Capacity, :PricePerDay, :HotelId)', {
      replacements: {
        Capacity: capacity,
        PricePerDay: pricePerDay,
        HotelId: hotelId
      }
    }).then(result => result
    ).catch(err => {
      return err;
    })
  }

  async rentARoom(userId, roomId, startDate, endDate) {
    sequelize.query("INSERT INTO Reservations (StartDate, EndDate, RoomId, UserId) VALUES (:StartDate, :EndDate, :RoomId, :UserId)",
      {
        replacements: {
          StartDate: startDate,
          EndDate: endDate,
          UserId: userId,
          RoomId: roomId
        }
      }
    ).then(result => {
      return result
    }).catch(err => {
      return (err)
    });
  }

  async get() {
    const rooms = await sequelize.query('SELECT * FROM Rooms', {
      type: QueryTypes.SELECT
    });
    return rooms;
  }

  async getHotelRooms(hotelId) {
    const rooms = await sequelize.query("SELECT * FROM Rooms WHERE HotelId = :HotelId", {
      replacements: {
        HotelId: hotelId
      },
      type: QueryTypes.SELECT,
    });
    return rooms;
  }

  async delete(id) {
    await sequelize.query('DELETE FROM Rooms WHERE id = :id', {
      replacements: {
        id: id
      }
    }).then(result => result
    ).catch(err => {
      return err;
    });
  }
}

module.exports = RoomService;