const tedious = require('tedious');
const { Sequelize } = require('sequelize');

const { dbName, dbConfig } = require('config.json');

module.exports = db = {};

initialize();

async function initialize() {
    const dialect = 'mysql';
    const host = dbConfig.server;
    const { userName, password } = dbConfig.authentication.options;

   

    // connect to db
    console.log('dbName',dbName);
    const sequelize = new Sequelize(dbName, userName, password, { host, dialect });
    // console.log(sequelize.create)
    // init models  add them to the exported db object
    db.users = require('../main/users/user.model')(sequelize);
    const game = require('../main/apps/apps.model')
    db.game = game.Gametype(sequelize);
    db.game = game.Gamelist(sequelize);



    db.sequelize = sequelize;

    // sync all models with database
    // await sequelize.sync({ alter: true});
}
