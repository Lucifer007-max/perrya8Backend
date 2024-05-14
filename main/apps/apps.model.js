const { DataTypes } = require('sequelize');

module.exports = {Gamelist,Gametype};

function Gamelist(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gameName: { type: DataTypes.STRING, allowNull: false },
        gametypeId: { type: DataTypes.INTEGER, allowNull: false },
    };

    return sequelize.define('gamelist', attributes);
}


function  Gametype(sequelize){
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gametypename: { type: DataTypes.STRING, allowNull: false },
    };

    return sequelize.define('gametype', attributes);
}