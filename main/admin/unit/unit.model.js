const { DataTypes } = require('sequelize');

module.exports = unit;

function unit(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
        unitname: { type: DataTypes.STRING, allowNull: false },
    };
    return sequelize.define('unit', attributes);
}