const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection/database"); // Adjust the path as necessary

const Destination = sequelize.define(
  "Destination",
  {
    // Model attributes are defined here
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    destination: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    // Model options go here
    tableName: "destinations",
  }
);

module.exports = Destination;
