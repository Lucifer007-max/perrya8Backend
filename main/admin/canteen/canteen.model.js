const { DataTypes } = require('sequelize');

module.exports = canteen;

function canteen(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        battalionId: { type: DataTypes.INTEGER, allowNull: false },
        unitId: { type: DataTypes.INTEGER, allowNull: false },
        canteenName: { type: DataTypes.STRING, allowNull: false },
        userName: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        approved: { type: DataTypes.INTEGER, allowNull: true },
    };
    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['password'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define('canteen', attributes, options);
}