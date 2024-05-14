const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const { QueryTypes } = require('sequelize');
module.exports = {
    create,
    getAllunit,
    deleteunit
};




async function create(params){
   const data =  await db.unit.create(params);
   return data
}


async function getAllunit() {
    const data = await db.unit.findAll();

    if (!data) 
        throw 'unit not found';

    return data;
}

async function deleteunit(id) {
    const user = await getunit(id);
    await user.destroy();
}


async function getunit(id) {
    var list = await db.unit.findByPk(id);
    if (!list) throw 'Unit not found';

    return list;
}