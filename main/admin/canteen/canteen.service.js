const jwt = require('jsonwebtoken');
const config = require('config.json');
const db = require('_helpers/db');
const { QueryTypes } = require('sequelize');
module.exports = {
    authenticateCanteen,
    create,
    getallCanteen,
    activateCanteen,
    deactivateCanteen,
    deleteCanteen,
};


async function authenticateCanteen({ email, password }) {
    const user = await db.canteen.findOne({ where: { userName:email,role:['canteen'] }});


    if(!user)
        throw 'You a    re not authorize'

    // if (!user || !(await compare(password, user.password)))
    //     throw 'Username or password is incorrect';

    // authentication successful
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    // return  token ;
    return { ...omitHash(user.get()), token ,msg: 'Login Successfully' };
}

async function create(params){
    params['approved'] = 0;
    params['role'] = 'canteen';

  
    if (await db.canteen.findOne({ where: { userName: params.userName } })) {
        throw 'Username "' + params.userName + '" is already taken';
    }

   const data =  await db.canteen.create(params);
   return data
}

async function getallCanteen(){

    const data = await db.sequelize.query('select c.* , b.battalionname , u.unitname from canteens as c left join battalions as b on b.id = c.battalionId left join units as u on u.id = c.unitId  ', {
        nest: true,
        type: QueryTypes.SELECT
    });

    if(!data) 
        throw 'No Canteen Found'

   return data
}


async function deactivateCanteen(params) {
   const data = await db.sequelize.query(`UPDATE canteens SET approved = 1 where id = ${params}`, {
        nest: true,
        type: QueryTypes.UPDATE
    });
    return data
}

async function activateCanteen(params) {
    const data = await db.sequelize.query(`UPDATE canteens SET approved = 0 where id = ${params}`, {
        nest: true,
        type: QueryTypes.UPDATE
    });
    return data
}

async function deleteCanteen(id) {
    const user = await getCanteen(id);
    await user.destroy();
}



async function getCanteen(id) {
    var list = await db.canteen.findByPk(id);

    if (!list) throw 'Canteen not found';

    return list;
}



function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}