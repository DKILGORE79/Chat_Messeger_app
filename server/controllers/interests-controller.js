const { sequelize } = require("../models/Interests");
const Interests = require("../models/Interests");

module.exports = {
  async getInterests(res) {
    const interests = await Interests.findByPk(res.id);
    if (!interests) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(interests);
  },
  async createInterests({ body }, res) {
    const interests = await Interests.create(body);
    res.status(200).json(interests);
  },
  //   see if this matches interests from a user * Possibly ask Chris on this.o
  async matchInterests(res) {
    const interests = await Interests.findOne({
      attributes: [
        "Interests.user_id",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM Interests WHERE Interests.user_id = User.id"
          ),
          "InterestCount",
        ],
      ],
      order: [[sequelize.literal("InterestCount"), "DESC"]],
    });
    if (!interests) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(interests);
  },
};
