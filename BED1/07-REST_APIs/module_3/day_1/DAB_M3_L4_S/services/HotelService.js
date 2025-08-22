const { sequelize } = require("../models");
const { QueryTypes } = require('sequelize');
class HotelService {
    constructor(db) {
        this.client = db.sequelize;
    }

    //Create a hotel using raw SQL
    async create(name, location) {
        sequelize.query('INSERT INTO hotels (Name, Location) VALUES (:Name, :Location)', {
            replacements:
            {
                Name: name,
                Location: location
            }
        }).then(result => {
            return result
        }).catch(err => {
            return (err)
        })
    }

    //Get all hotels using raw SQL
    async get() {
        const hotels = await sequelize.query('SELECT * FROM hotels', {
            type: QueryTypes.SELECT,
        });
        return hotels;
    }

    //Get hotel details using raw SQL	
    async getHotelDetails(hotelId) {
        //Retrive hotel data
        const hotel = await sequelize.query('SELECT h.id, h.Name, h.Location, ROUND(AVG(r.Value), 1) AS AvgRate FROM hotels h LEFT JOIN rates r ON h.id = r.HotelId WHERE h.id = :hotelId', {
            replacements:
            {
                hotelId: hotelId
            },
            type: QueryTypes.SELECT,
        });

        //Retrive user rating count
        const userRateCount = await sequelize.query('SELECT COUNT(*) as Rated FROM rates WHERE HotelId = :hotelId AND UserId = :userId;', {
            replacements:
            {
                hotelId: hotelId,
                userId: 1
            },
            type: QueryTypes.SELECT,
        });

        //Check if user has rated this hotel.
        if (userRateCount[0].Rated > 0) {
            hotel[0].Rated = true;
        } else {
            hotel[0].Rated = false;
        }

        return hotel[0];
    }

    //Delete a hotel using raw SQL
    async deleteHotel(hotelId) {
        await sequelize.query('DELETE FROM hotels WHERE id = :hotelId', {
            replacements:
            {
                hotelId: hotelId
            }
        }).then(result => {
            return result
        }).catch(err => {
            return (err)
        })
    }

    //Rate a hotel using raw SQL
    async makeARate(userId, hotelId, value) {
        sequelize.query('INSERT INTO rates (Value, HotelId, UserId) VALUES (:value, :hotelId, :userId)', {
            replacements:
            {
                userId: userId,
                hotelId: hotelId,
                value: value,
            }
        }).then(result => {
            return result
        }).catch(err => {
            return (err)
        })
    }
}
module.exports = HotelService;