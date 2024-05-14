const { DataTypes } = require('sequelize');

module.exports = battalion;

function battalion(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        battalionname: { type: DataTypes.STRING, allowNull: false },
    };

    return sequelize.define('battalion', attributes);
}