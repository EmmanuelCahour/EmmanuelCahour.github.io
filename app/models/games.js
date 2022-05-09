const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Games extends Sequelize.Model {}

Games.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
        },
        image: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        tableName: 'games',
    }
);

module.exports = Games;