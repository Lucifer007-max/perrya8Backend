const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const { QueryTypes } = require('sequelize');
module.exports = {
    create,
    getAllBattalion,
    deleteBattalion,
};




async function create(params){
   const data =  await db.battalion.create(params);
   return data
}


async function getAllBattalion() {
    const data = await db.battalion.findAll();

    if (!data) 
        throw 'Battalion not found';

    return data;
}

async function deleteBattalion(id) {
    const user = await getBattalion(id);
    await user.destroy();
}


async function getBattalion(id) {
    var list = await db.battalion.findByPk(id);
    if (!list) throw 'Battalion not found';

    return list;
}


