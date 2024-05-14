const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const authorizeAdmin = require('_middleware/authorizeAdmin');
const battalionService =  require('./battalion.service')

router.post('/create', createSchema, create);
router.get('/getAll',  getAllBattalion);
router.delete('/del/:id',  deleteBattalion);


module.exports = router;

function createSchema(req, res, next) {
    const schema = Joi.object({
        battalionname: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

 

function create(req, res, next) {
    battalionService.create(req.body)
    .then(() => res.json({msg : 'Battalion Created sucessful'}))
    .catch(next);
}

function getAllBattalion(req, res, next) {
    battalionService.getAllBattalion()
    .then((list) => res.json(list))
    .catch(next);
}

function deleteBattalion(req, res, next) {
    battalionService.deleteBattalion(req.params.id)
        .then(() => res.json({ msg: 'Battalion deleted successfully' }))
        .catch(next);
}
