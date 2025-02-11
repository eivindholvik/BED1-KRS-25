const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class HotelService {
  constructor(db) {
    this.client = db.sequelize;
    this.Hotel = db.Hotel;
  }

  async create(name, location) {
    sequelize.query('INSERT INTO Hotels (Name, Location) VALUES (:Name, :Location)', {
      replacements: {
        Name: name,
        Location: location
      }
    }).then(result => result
    ).catch(err => {
      return err;
    })
  }

  async get() {
    const hotels = await sequelize.query('SELECT * FROM Hotels', {
      type: QueryTypes.SELECT
    });
    return hotels;
  }

  async delete(id) {
    await sequelize.query('DELETE FROM Hotels WHERE id = :id', {
      replacements: {
        id: id
      }
    }).then(result => result
    ).catch(err => {
      return err;
    });
  }
}

module.exports = HotelService;