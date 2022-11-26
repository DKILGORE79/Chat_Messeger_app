const user = require("./user");
const Interests = require("./Interests");

// interest belongs to users

Interests.belongsTo(user, {
  foreignKey: "interests_id",
});

user.hasMany(Interests, {
  foreignKey: "interests_id",
});

module.exports = { user, Interests };
