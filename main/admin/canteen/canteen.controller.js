const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const authorizeAdmin = require('_middleware/authorizeAdmin');
const canteenService =  require('./canteen.service')



router.post('/authenticate', authenticateSchema, authenticateCanteen);
router.post('/create', createSchema, create);
router.get('/getAll',  getallCanteen);
router.put('/deactivate/:id',  deactivateCanteen);
router.put('/activate/:id',  activateCanteen);
router.delete('/del/:id',  deleteCanteen);

module.exports = router;



function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticateCanteen(req, res, next) {
    canteenService.authenticateCanteen(req.body)
        .then(user => res.json(user))
        .catch(next);
}


function createSchema(req, res, next) {
    // req.body.approved = 1;
    req.body.approved = 0;
    console.log(req.body)
    const schema = Joi.object({
        battalionId: Joi.any().required(),
        unitId: Joi.any().required(),
        canteenName: Joi.string().required(),
        userName: Joi.string().required(),
        password: Joi.any().required(),
    });
    validateRequest(req, next, schema);
}

 

function create(req, res, next) {
    canteenService.create(req.body)
    .then(() => res.json({msg : 'Canteen Created sucessful'}))
    .catch(next);
}
function getallCanteen(req, res, next) {
    canteenService.getallCanteen(req.body)
    .then((data) => res.json(data))
    .catch(next);
}

function deactivateCanteen(req, res, next) {
    canteenService.deactivateCanteen(req.params.id)
        .then(() => res.json({ msg: 'Canteen Deactivate successfully' }))
        .catch(next);
}
function activateCanteen(req, res, next) {
    canteenService.activateCanteen(req.params.id)
        .then(() => res.json({ msg: 'Canteen Activate successfully' }))
        .catch(next);
}
function deleteCanteen(req, res, next) {
    canteenService.deleteCanteen(req.params.id)
        .then(() => res.json({ msg: 'Canteen Delete successfully' }))
        .catch(next);
}