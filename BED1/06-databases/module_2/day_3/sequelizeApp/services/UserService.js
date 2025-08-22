class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.user = db.users;
  }

  async create(firstName, lastName) {
    return this.user.create(
      {
        firstName,
        lastName
      }
    )
  }

  async getAll() {
    return this.user.findAll({
      where: {}
    })
  }

  async changeFirstName(userId, firstName) {
    return this.user.update({ firstName }, { where: { id: userId } })
  }

  async deleteUser(userId) {
    return this.user.destroy({
      where: { id: userId }
    });
  }
}

module.exports = UserService;