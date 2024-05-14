const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const authorizeAdmin = require('_middleware/authorizeAdmin');
const unitService =  require('./unit.service')

router.post('/create', createSchema, create);
router.get('/getAll',  getAllunit);
router.delete('/del/:id',  deleteunit);


module.exports = router;

function createSchema(req, res, next) {
    const schema = Joi.object({
        unitname: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

 

function create(req, res, next) {
    unitService.create(req.body)
    .then(() => res.json({msg : 'unit Created sucessful'}))
    .catch(next);
}

function getAllunit(req, res, next) {
    unitService.getAllunit()
    .then((list) => res.json(list))
    .catch(next);
}

function deleteunit(req, res, next) {
    unitService.deleteunit(req.params.id)
        .then(() => res.json({ msg: 'Unit deleted successfully' }))
        .catch(next);
}