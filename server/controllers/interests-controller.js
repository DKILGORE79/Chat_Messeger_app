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
};
