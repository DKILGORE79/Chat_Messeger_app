const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Interests extends Model { }

Interests.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    books: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    foods: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    movies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "interests",
  }
);

module.exports = Interests;
